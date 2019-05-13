// a.k.a Footer

import React, { Component } from 'react';

import '../css/style.css';

class PlayerUI extends Component {
    constructor(props) {
        super(props);
        //「擲骰按鈕」
        this.cubeRef = [];
        // 骰子本人
        this.cubicRef = [];
        // 按鈕 + 骰子包裹
        this.diceRef = [];
        // 全部玩家 UI 大包裹
        this.plyZoneRef = React.createRef();
    }

    componentDidMount() {
        this.cubeInit(-1);
        if (this.props.plyList[0].type === 'npc') {
            console.log('如果第一個玩家是 NPC');
            setTimeout(() => {
                console.log('等 2 秒自動骰～！');
                this.cubeRef[0].click();
            }, 2000);
        }
    }

    componentDidUpdate(prevProps) {
        let prevPlyIndex = prevProps.isTurn;
        let nextPlyIndex = this.props.isTurn;
        let nextPly = this.props.plyList[nextPlyIndex];
        let plyInfos = this.props.plyInfoRefs;

        if (nextPlyIndex !== prevPlyIndex) {
            plyInfos[prevPlyIndex].classList.remove('plyElecting');
            if (nextPly.inJail) {
                this.cubeInit(nextPlyIndex + 1);
                // 換下一人
                this.props.updateTurn(nextPlyIndex + 1);
                // 出獄
                this.props.inOutJail(nextPlyIndex);
                // 解除坐牢 UI
                plyInfos[nextPlyIndex].classList.remove('plyInJail');
            } else if (nextPly.type === 'npc') {
                nextPlyIndex === 0 ? this.cubeInit(-1) : this.cubeInit(nextPlyIndex);
                setTimeout(() => { this.cubeRef[nextPlyIndex].click() }, 2000);
            } else if (nextPly.type === 'ply') {
                nextPlyIndex === 0 ? this.cubeInit(-1) : this.cubeInit(nextPlyIndex);
            }
        }
    }
    
    cubeInit(num) {
        if (num < 1) {
            num = (num + 1) % this.plyZoneRef.current.length;
        }
        if (num >= this.plyZoneRef.current.length) {
            num = num % this.plyZoneRef.current.length;
        }
        this.cubeRef[0].setAttribute('disabled', true);
        this.cubeRef[1].setAttribute('disabled', true);
        this.cubeRef[2].setAttribute('disabled', true);
        this.cubeRef[3].setAttribute('disabled', true); 
        this.cubeRef[num].removeAttribute('disabled');

        if (this.props.plyList[this.props.isTurn].type === 'ply') {
            this.diceRef[num].style.pointerEvents = 'auto';
        }

        this.props.plyInfoRefs[num].classList.add('plyElecting');
    }

    rollingDice(e, i, curr) {
        // 點一次之後就封起來，不讓人類亂連擊丟骰子按鈕
        this.diceRef[i].style.pointerEvents = 'none';
        // 骰按鈕
        let cube = e.target;
        // 骰子本人
        let cubic = this.cubicRef[i];
        // 骰子本人角度
        let sides = this.props.sides;
        // 在這觸發丟骰子動畫
        cubic.classList.add('rolling');
        // 骰到幾
        let step = Math.floor(Math.random() * 6) + 1;

        // 移除丟骰子動畫 class，讓下一次骰可以再動，然後讓骰子顯示正確數字
        setTimeout(() => {
            cubic.classList.remove('rolling');
            cubic.style.transform = sides[step - 1];
        }, 500);

        // 棋子
        let chesses = this.props.chessRefs;
        // 回傳骰到的步數給 Redux
        this.props.updateOutcome(i, step);
        // 等骰子動畫好後，棋子才開始移動
        setTimeout(() => {
            // 移動棋子
            for(let j = 0; j < step; j++) {
                setTimeout(() => { this.moveChess(cube, chesses, true, parseInt(curr) + j) }, j * 400);
            }
            // 檢查抵達的格子是否有命運機會事件
            setTimeout(() => { this.checkEvent(cube, chesses) }, step * 500 );
        }, 1000);
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
        let currCell = this.props.cellRefs[curr];
        if (currCell !== undefined) {
            let nextCell = null;
            direction ? nextCell = currCell.nextSibling : nextCell = currCell.previousSibling;
            chesses.forEach((c, i) => {
                if(cube.getAttribute('data-confirm') === c.getAttribute('data-confirm') && nextCell !== null) {
                    // 棋子「目前在的那格」的「下一格」的「定位用 span 們」
                    let nextSpot = this.props.findSpot(nextCell.firstChild.childNodes[i]);
                    this.props.updateOffset(i, nextSpot);
                } else {
                    return
                }
            });
        } else { return }
    }

    render() {
        const {
            plyList,
            sides,
            plyInfoRefs
        } = this.props;

        // 骰子的面
        let divs = sides.map((side, i) => {
            return <div key={i} className="side">{ i + 1 }</div>
        });

        return(
            <footer>
                <div id='gameUI'>
                    <form id='plyZone' name='plyZone' ref={ this.plyZoneRef }>
                    { plyList.map((ply, i) => {
                        return(
                            <div key={i} className='plyInfo' ref={ plyInfoRef => plyInfoRefs[i] = plyInfoRef }>
                                <div className="plyDetail">
                                    { ply.type === 'ply' && <p>玩家</p> }
                                    { ply.type === 'npc' && <p>NPC</p> }
                                    <p>{ ply.name }</p>
                                </div>
                                <div className='plyImg'>
                                    <img src={ ply.icon }></img>
                                </div>
                                <div data-confirm={ ply.uid } className='dice' ref={ diceRef => this.diceRef[i] = diceRef }>
                                    <div className="cubicWrap">
                                        <div className={`cubic d` + sides.length } ref={ cubicRef => this.cubicRef[i] = cubicRef }>
                                            { divs }
                                        </div>
                                    </div>
                                    <input type='button' value='擲骰'
                                    name={ 'cube' + i } className='cube' ref={ cubeRef => this.cubeRef[i] = cubeRef }
                                    data-confirm={ ply.uid }
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