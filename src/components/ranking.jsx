import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/style.css';
import '../css/ranking.css';

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
                <div id='rankingTable'>
                    <p>排名 ::: Ranking</p>
                    <div id='rank'>
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
                    <button id='backToTop'><NavLink to='/'>返回首頁</NavLink></button>
                </div>
            </div>
        )
    }
}

export default Ranking;