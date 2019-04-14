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
            }, 3000);
        }
    }

    // componentWillUnmount() { }

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
        this.props.updateTurn(num);
    }

    rollingDice(e, i, curr) {
        let step = Math.floor(Math.random() * 6) + 1;
        this.props.updateOutcome(i, step);
        for (let j = 0; j < step; j++) {
            // console.log(j);
            this.moveChess(e, parseInt(curr) + j);
        }
        // 觸發命運機會事件，如果有
        let cell = this.props.cell[parseInt(curr) + step];
        if (cell !== undefined) {
            if (cell.event === null) {
                this.cubeInit(i + 1);
                return
            } else if (cell.event === 'foward') {
                this.moveChess(e, parseInt(curr) + step);
                alert('獲得跑車，前進一格')
                this.cubeInit(i + 1);
            } else if (cell.event === 'back') {
                this.moveChess(e, parseInt(curr) + step - 2);
                alert('被狗追，後退一格');
                this.cubeInit(i + 1);
            } else if (cell.event === 'stay') {
                alert('踩到香蕉皮，休息一次')
                this.cubeInit(i + 1);
            } else if (cell.event === 'goal') {
                alert (e.target.parentNode.parentNode.querySelector('p').textContent + ' 贏ㄌ!!!');
            }
        }
    }

    moveChess(e, curr) {
        let cube = e.target;
        let chesses = document.querySelectorAll('.chess');
        let cell = document.querySelectorAll('.cytoplasm')[parseInt(curr) + 1];
        chesses.forEach((c, i) => {
            if(cube.getAttribute('data-confirm') === c.getAttribute('data-confirm') && cell !== undefined) {
                console.log('YOOO', c.style.left);
                // 棋子「目前在的那格」的「下一格」的「定位用 span 們」
                let nextSpot = this.props.findSpot(cell.querySelectorAll('span')[i]);
                this.props.updateOffset(i, nextSpot);
            } else {
                return
            }
        });
    }

    componentDidUpdate(prevProps) {
        // props.id が変更されたら再フェッチ
        // if (this.props.name !== prevProps.name) {
        //   this.fetchUser(this.props.name);
        // }
    }

    render() {
        const {
            plyList
        } = this.props;
        console.log('傳到 PlyayerUI Component 裡的 props', this.props);
        return(
            <footer>
                <div id='gameUI'>
                    <div id="gameInfo">
                        <p>回合數</p>
                        <p id="currentTurn">YO</p>
                    </div>
                    <form id='plyZone' name='plyZone'>
                    { plyList.map((ply, i) => {
                        return(
                            <div key={i} className='plyInfo'>
                                <p>{ply.name}</p>
                                <div data-confirm={ply.uid} className='dice'>
                                    <p>{ ply.outcome }</p>
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