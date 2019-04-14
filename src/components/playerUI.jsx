// a.k.a Footer

import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

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
    }

    rollingDice(e, i) {
        let step = Math.floor(Math.random() * 6) + 1;
        this.props.updateOutcome(i, step);
        this.cubeInit(i + 1);
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
                                <p>{ply.uid}</p>
                                <div data-confirm={ply.uid} className='dice'>
                                    <p>{ ply.outcome }</p>
                                    <input type='button' value='骰～!'
                                    name={ 'cube' + i } className='cube'
                                    id={`${ ply.name }`}
                                    onClick={ (e) => this.rollingDice(e, i) } />
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