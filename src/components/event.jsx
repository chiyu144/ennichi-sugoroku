import React, { Component } from 'react';

import '../css/style.css';
import '../css/chess.css';

class Event extends Component {
    constructor(props) {
        super(props)
    }

    closeEvent() {
        let eventShower = document.querySelector('#eventShower');
        eventShower.checked = false;
    }

    eventMoveChessOneTime(isTurn, direction, currCellNum) {
        let currCell = document.querySelectorAll('.cell')[currCellNum];
        // 因為跟骰骰子的前進後退用不一樣的條件，又再寫一個 function 來處理命運機會的移動棋子
        // 抓下一格的定位 span，改 redux 裡的座標
        let nextCell = null;
        direction ? nextCell = currCell.nextSibling : nextCell = currCell.previousSibling;
        console.log('動一次', '方向', direction, '目前格', currCell, '下一格', nextCell);
        let nextSpot = this.props.findSpot(nextCell.querySelectorAll('span')[isTurn]);
        this.props.updateOffset(isTurn, nextSpot);
    }

    eventMoveChessManyTimes(move, isTurn, direction, currCellNum) {
        this.closeEvent();
        if (isTurn >= document.plyZone.length) {
            isTurn = isTurn % document.plyZone.length;
        }
        for (let j = 0; j < move; j++) {
            console.log('動多次', '誰動', isTurn, '方向', direction, '目前格子index', currCellNum);
            setTimeout(() => { this.eventMoveChessOneTime(isTurn, direction, parseInt(currCellNum) + j) }, j * 300);
        }
        // 換下一人
        setTimeout(() => { this.props.updateTurn(isTurn + 1) }, move * 400);
    }

    eventJail(isTurn) {
        this.closeEvent();
        // 關閉 checkbox → 修改 Redux 裡 PlyList[isTurn].inJail = true（坐牢狀態）
        this.props.inOutJail(isTurn);
        // 顯示坐牢 UI
        // 換下一人（之後回去 playerUI 寫判斷說如果 inJail 是 true 要跳過這人）
        this.props.updateTurn(isTurn + 1);    
    }

    eventTellKnowledge(isTurn) {
        this.closeEvent();
        if (isTurn >= document.plyZone.length) {
            isTurn = isTurn % document.plyZone.length;
        }
        // 換下一人
        this.props.updateTurn(isTurn + 1);
    }

    render() {
        const {
            isTurn,
            plyList,
            cell,
            event
        } = this.props;

        // 需要： 1. isTurn 數字（當棋子的 index，找到正在玩的玩家棋子）
        // 2. offset.curr（找到正站在哪格）

        // 抓到現在是哪個人正在玩，然後他站在哪格上
        const theCellNum = plyList[isTurn].offset.curr;
        const theCell = cell[theCellNum];
        // 準備把他那格的事件 render 出來
        const theEvent = theCell.event;

        // console.log('傳到 Event Component 裡的 props', this.props);
        
        // if 事件類型是「前進」就 render 可以 trigger「前進」的按鈕
        // if 事件類型是「後退」就 render 可以 trigger「後退」的按鈕
        // if 事件類型是「坐牢」就 render 可以 trigger「坐牢」的按鈕
        // if 事件類型是「科普」就 render 可以 trigger「科普」的按鈕
        
        return(
            <div id='event'>
                <p>{ theEvent.title }</p>
                <p>{ theEvent.description }</p>
                { theEvent.type === 'foward' && <button onClick={ () => this.eventMoveChessManyTimes(theEvent.move, isTurn, theEvent.direction, theCellNum) }>前</button> }
                { theEvent.type === 'back' && <button onClick={ () => this.eventMoveChessManyTimes(theEvent.move, isTurn, theEvent.direction, theCellNum) }>後</button> }
                { theEvent.type === 'jail' && <button onClick={ () => this.eventJail(isTurn) }>坐牢</button> }
                { theEvent.type === 'knowledge' && <button onClick={ () => this.eventTellKnowledge(isTurn) }>科普</button> }            
                { theEvent.type === 'goal' && <button onClick={ () => this.closeEvent() }>勝利</button> }            
            </div>
        )
    }
}

export default Event;