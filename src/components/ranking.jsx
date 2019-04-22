import React, { Component } from 'react';

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
                <p>第一名</p>
                <p>{ plyList[0].name }</p>
                <p>第二名</p>
                <p>{ plyList[1].name }</p>
                <p>第三名</p>
                <p>{ plyList[2].name }</p>
                <p>第四名</p>
                <p>{ plyList[3].name }</p>
            </div>
        )
    }
}

export default Ranking;