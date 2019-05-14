import React, { Component } from 'react';

import '../css/style.css';
import '../css/game.css';

import Cell from './cell';
import Chess from './chess';
import PlayerUI from '../containers/playerUI';
import Event from '../containers/event';
class Game extends Component {
  constructor(props) {
    super(props);
    this.gameRef = React.createRef();
    this.chessRefs = [];
    this.cellRefs = [];
    // 每個玩家 UI 小包裹
    this.plyInfoRefs = [];
    this.eventTriggerRef = React.createRef();
    this.eventTriggerBtnRef = React.createRef();
  }
  componentDidMount() {
    let chesses = this.chessRefs;
    let startCorners = this.cellRefs[0].firstChild.childNodes;
    chesses.forEach((chess, i) => {
      this.setChessPosition(startCorners[i], i);
    })
    window.addEventListener("resize", () => { this.props.updateBodyWidth(document.body.offsetWidth) });
  }

  componentWillUnmount() {
    // 觸發重設 State 的 Action（玩一半跳出遊戲畫面 ex. 重整 or 上一頁，就必須重玩）
    this.props.resetGame();
    window.removeEventListener("resize", () => { this.props.updateBodyWidth(document.body.offsetWidth) });
  }

  componentDidUpdate(prevProps) {
    // 如果命運機會跳出，遊戲主畫面卷軸隱藏，命運機會事件卷軸顯示
    // 如果玩家是 NPC，電腦 2 秒後自行按下確認鈕，並防止人類亂按
    // 如果玩家是人類，電腦就沒事，確認鈕可以給人類按
    let prevChecked = prevProps.checked;
    let nextChecked = this.props.checked;
    let playing = this.props.plyList[this.props.isTurn];
    if (nextChecked !== prevChecked) {
      if (nextChecked === true) {
        // window、body 不屬於 React 管轄範圍，所以以下有寫到的地方就用原生 JavaScript 寫。
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        this.gameRef.current.style.marginRight = scrollWidth + 'px';
        document.body.style.overflow = 'hidden';
        if (playing.type === 'npc') {
          this.eventTriggerRef.current.style.pointerEvents = 'none';
          setTimeout(() => { this.eventTriggerBtnRef.current.click() }, 2000);
        } else if (playing.type === 'ply') {
          this.eventTriggerRef.current.style.pointerEvents = 'auto'
        }
      } else {
        this.gameRef.current.style.marginRight = 0;
        document.body.style.overflow = 'auto';
      }
    }
    
    // 棋子 RWD
    let prevBodyWith = prevProps.bodyWidth;
    let nextBodyWith = this.props.bodyWidth;
    if(nextBodyWith !== prevBodyWith) {
      let chesses = this.chessRefs;
      chesses.forEach((chess, i) => {
        let curr = this.props.plyList[i].offset.curr;
        this.setChessPosition(this.cellRefs[curr].firstChild.childNodes[i], i);
      })
    }
  }

  findSpot(corner) {
    let rect = corner.getBoundingClientRect();
    let curr = corner.parentNode.parentNode.getAttribute('data-curr');
    return { curr: curr, x: rect.left + window.pageXOffset, y: rect.top + window.pageYOffset } 
  }

  setChessPosition(corner, i) {
    let spot = this.findSpot(corner);
    this.props.updateOffset(i, spot);
  }

  render() {
    const {
      checked,
      plyList,
      cell
    } = this.props;
    return(
      <div id="game" ref={ this.gameRef }>
        { plyList.map((ply, i) => {
          return(
            <Chess key={i} chessRef={ chessRef => this.chessRefs[i] = chessRef } 
                  uid={ ply.uid } offset={ ply.offset } icon={ ply.icon }
            />
          )
        })}
        <input type="checkbox" id="eventShower" checked={ checked } onChange={ this.props.openCloseEvent }></input>
        <div id='board'>
          <div id='map'>
            <div id='cellContainer'>
              { cell.map(( c, i ) => {
                return(
                  <Cell key={i} curr={ c.index } visualCell={ c.visualCell }
                        cellRef={ cellRef => this.cellRefs[i] = cellRef }
                  />
                )
              })}
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <PlayerUI findSpot={ this.findSpot } setChessPosition={ this.setChessPosition }
                  cellRefs={ this.cellRefs } chessRefs={ this.chessRefs }
                  plyInfoRefs={ this.plyInfoRefs }
        />
        <label id="eventBackground" htmlFor="eventShower"></label>
          <div id='eventWrap'>
            <Event findSpot={ this.findSpot } cellRefs={ this.cellRefs } plyInfoRefs={ this.plyInfoRefs }
             eventTriggerRef={ this.eventTriggerRef } eventTriggerBtnRef={ this.eventTriggerBtnRef }
            />
          </div>
      </div>
    )
  }
}

export default Game;