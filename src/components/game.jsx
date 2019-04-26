import React, { Component } from 'react';

import '../css/style.css';
import '../css/game.css';

import Map from './map';
import Chess from '../containers/chess';
import PlayerUI from '../containers/playerUI';
import Event from '../containers/event';
class Game extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { 
    let chesses = document.querySelectorAll('.chess');
    let startCorners = document.querySelectorAll('.cytoplasm')[0].querySelectorAll('span');
    chesses.forEach((chess, i) => {
      this.setChessPosition(chess, startCorners[i], i);
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

  setChessPosition(chess, corner, i) {
    let spot = this.findSpot(corner);
    this.props.updateOffset(i, spot);
  }

  componentDidUpdate(prevProps) {
    
    let prevChecked = prevProps.checked;
    let nextChecked = this.props.checked;
    let playing = this.props.plyList[this.props.isTurn];
    let theEventType = this.props.cell[playing.offset.curr].event.type;

    if (nextChecked !== prevChecked) {
      if (nextChecked === true) {
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        document.querySelector('#game').style.marginRight = scrollWidth + 'px';
        document.body.style.overflow = 'hidden';
        
        if (playing.type === 'npc') {
          document.querySelector('#eventTrigger').style.pointerEvents = 'none';
          if (theEventType === 'goal') setTimeout(() => { document.querySelector('#eventTrigger a').click() }, 2000)
          else setTimeout(() => { document.querySelector('#eventTrigger > button').click() }, 2000);
        } else if (playing.type === 'ply') {
          document.querySelector('#eventTrigger').style.pointerEvents = 'auto'
        }

      } else {
        document.querySelector('#game').style.marginRight = 0;
        document.body.style.overflow = 'auto';
      }
    }

    // let prevBodyWith = prevProps.bodyWidth;
    // let nextBodyWith = this.props.bodyWidth;
    // if(nextBodyWith !== prevBodyWith) {
    //   console.log('Body寬度有變');
      // let chesses = document.querySelectorAll('.chess');
      // chesses.forEach((chess, i) => {
      //   this.setChessPosition(chess, startCorners[i], i);
      // })
    // }
  }

  render() {
    const {
      checked
    } = this.props;
    return(
      <div id="game">
        <Chess />
        <input type="checkbox" id="eventShower" checked={ checked } onChange={ this.props.openCloseEvent }></input>
        <p>Game Start</p>
        <div id='board'>
          <Map />
        </div>
        <PlayerUI findSpot={ this.findSpot } setChessPosition={ this.setChessPosition }/>
        <label id="eventBackground" htmlFor="eventShower"></label>
        <div id='eventWrap'>
          <Event findSpot={ this.findSpot }/>
        </div>
      </div>
    )
  }
}

export default Game;