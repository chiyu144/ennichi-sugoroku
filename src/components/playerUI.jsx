// a.k.a Footer

import React, { Component } from 'react';

import '../css/style.css';

class PlayerUI extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.cubeInit(-1);
        if (this.props.plyList[0].type === 'npc') {
            console.log('如果第一個玩家是 NPC');
            setTimeout(() => {
                console.log('等 3 秒自動骰～！');
                document.querySelectorAll('.cube')[0].click();
            }, 2000);
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps === this.props ? console.log('true'):console.log('false'));
        
        let prevPlyIndex = prevProps.isTurn;
        let nextPlyIndex = this.props.isTurn;
        let nextPly = this.props.plyList[nextPlyIndex];

        if (nextPlyIndex !== prevPlyIndex) {
            if (nextPly.inJail) {
                this.cubeInit(nextPlyIndex + 1);
                // 換下一人
                this.props.updateTurn(nextPlyIndex + 1);
                // 出獄
                this.props.inOutJail(nextPlyIndex);
            } else if (nextPly.type === 'npc') {
                nextPlyIndex === 0 ? this.cubeInit(-1) : this.cubeInit(nextPlyIndex);
                setTimeout(() => { document.querySelectorAll('.cube')[nextPlyIndex].click() }, 2000);
            } else if (nextPly.type === 'ply') {
                nextPlyIndex === 0 ? this.cubeInit(-1) : this.cubeInit(nextPlyIndex);
            }
        }
    }
    
    cubeInit(num) {
        if (num < 1) {
            num = (num + 1) % document.plyZone.length;
        }
        if (num >= document.plyZone.length) {
            num = num % document.plyZone.length;
        }
        document.plyZone.cube0.setAttribute('disabled', true);
        document.plyZone.cube1.setAttribute('disabled', true);
        document.plyZone.cube2.setAttribute('disabled', true);
        document.plyZone.cube3.setAttribute('disabled', true); 
        document.plyZone.elements['cube' + num].removeAttribute('disabled');

        if (this.props.plyList[this.props.isTurn].type === 'ply') {
            document.querySelectorAll('.dice')[num].style.pointerEvents = 'auto';
        }
    }

    rollingDice(e, i, curr) {
        // 點一次之後就封起來，不讓人類亂連擊丟骰子按鈕
        document.querySelectorAll('.dice')[i].style.pointerEvents = 'none';
        let cube = e.target;
        let step = Math.floor(Math.random() * 6) + 1;
        let chesses = document.querySelectorAll('.chess');
        // 回傳骰到的步數給 Redux
        this.props.updateOutcome(i, step);
        // 移動棋子
        for(let j = 0; j < step; j++) {
            setTimeout(() => { this.moveChess(cube, chesses, true, parseInt(curr) + j) }, j * 300);
        }
        // 檢查抵達的格子是否有命運機會事件
        setTimeout(() => { this.checkEvent(cube, chesses) }, step * 400 );
    }

    checkEvent(cube, chesses) {
        chesses.forEach((c, i) => {
            if(cube.getAttribute('data-confirm') === c.getAttribute('data-confirm')) {
                let currCellNum = this.props.plyList[i].offset.curr;
                let currCell = this.props.cell[currCellNum];
                // 如果 Event 是 null 沒事情發生
                if (currCell.event.type === null) {
                    // 換下一位
                    this.props.updateTurn(i + 1);
                    return
                } else {
                    // 把 check box 打勾，蓋板從旁邊長出（漢堡選單概念）
                    // 蓋板內容顯示是啥事件，在裡面按了選項，才真的 trigger 事件
                    this.props.openCloseEvent(true);
                }
            }
        });
    }

    moveChess(cube, chesses, direction, curr) {
        let currCell = document.querySelectorAll('.cell')[curr];
        if (currCell !== undefined) {
            let nextCell = null;
            direction ? nextCell = currCell.nextSibling : nextCell = currCell.previousSibling;
            chesses.forEach((c, i) => {
                if(cube.getAttribute('data-confirm') === c.getAttribute('data-confirm') && nextCell !== null) {
                    // 棋子「目前在的那格」的「下一格」的「定位用 span 們」
                    let nextSpot = this.props.findSpot(nextCell.querySelectorAll('span')[i]);
                    this.props.updateOffset(i, nextSpot);
                } else {
                    return
                }
            });
        } else { return }
    }

    render() {
        const {
            plyList
        } = this.props;
        // console.log('傳到 PlyayerUI Component 裡的 props', this.props);
        return(
            <footer>
                <div id='gameUI'>
                    {/* <div id="gameInfo">
                        <p>回合數</p>
                        <p id="currentTurn">YOO</p>
                    </div> */}
                    <form id='plyZone' name='plyZone'>
                    { plyList.map((ply, i) => {
                        return(
                            <div key={i} className='plyInfo'>
                                <p>{ply.name}</p>
                                <div data-confirm={ply.uid} className='dice'>
                                    <p>{ ply.outcome }</p>
                                    <div className="cubic">
                                        <div className="front"></div>
                                        <div className="right"></div>
                                        <div className="bottom"></div>
                                        <div className="top"></div>
                                        <div className="left"></div>
                                        <div className="back"></div>
                                    </div>
                                    <input type='button' value='骰～!'
                                    name={ 'cube' + i } className='cube'
                                    data-confirm={ply.uid}
                                    onClick={ (e) => this.rollingDice(e, i, ply.offset.curr) } />
                                </div>
                            </div>
                        )
                    })}
                    </form>
                </div>
            </footer>
        )
    }
}  

export default PlayerUI;