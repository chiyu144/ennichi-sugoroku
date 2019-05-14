import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/style.css';
import '../css/ranking.css';

class Ranking extends Component {
    componentWillUnmount() {
        // 觸發重設 State 的 Action（清空 State）
        this.props.resetRank();
    }

    render() {
        const {
            rankList
        } = this.props;
        return (
            <div id='ranking'>
                <div id='rankingTable'>
                    <p>排名 ::: Ranking</p>
                    <div id='rank'>
                    { rankList.map((r, i) => {
                        return(
                    <div key={i} className='panel'>
                        <p>{ i+1 }</p>
                        <div className="wheel">
                            { r.type === 'ply' && <p>玩家</p> }
                            { r.type === 'npc' && <p>NPC</p> }
                            <p>{ r.name }</p>
                            <img src={ r.icon }></img>
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