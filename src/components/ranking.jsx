import React, { Component } from 'react';

import '../css/style.css';
import '../css/ranking.css';

import circle from '../img/circle.png';

class Ranking extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            plyList
        } = this.props;
        return (
            <div id='ranking'>
                <div className='circle'>
                    <img src={ circle } />
                </div>
                <p>Ranking</p>
                { plyList.map((ply, i) => {
                    return(
                <div key={i} className='panel'>
                    <p>{ i+1 }</p>
                    <div className="wheel">
                        { ply.type === 'ply' && <p>玩家</p> }
                        { ply.type === 'npc' && <p>NPC</p> }
                        <p>{ ply.name }</p>
                        <img src={ ply.icon }></img>
                    </div>
                </div>
                )})}
            </div>
        )
    }
}

export default Ranking;