import React, { Component } from 'react';

import '../css/style.css';
import '../css/game.css';

import Cell from './cell';
import Chess from './chess';
import PlayerUI from '../containers/playerUI';
class Game extends Component {
  constructor(props) {
    super(props);
    this.gameRef = React.createRef();
    this.chessRefs = [];
    this.cellRefs = [];
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
    window.removeEventListener("resize", () => { this.props.updateBodyWidth(document.body.offsetWidth) });
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

  componentDidUpdate(prevProps) {
    
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

    // let prevBodyWith = prevProps.bodyWidth;
    // let nextBodyWith = this.props.bodyWidth;
    // if(nextBodyWith !== prevBodyWith) {
    //   console.log('Body寬度有變');
    //   let chesses = document.querySelectorAll('.chess');
    //   chesses.forEach((chess, i) => {
    //     this.setChessPosition(chess, startCorners[i], i);
    //   })
    // }
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
                  eventTriggerRef={ this.eventTriggerRef } eventTriggerBtnRef={ this.eventTriggerBtnRef }
        />
      </div>
    )
  }
}

export default Game;