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
      if (nextChecked === true && playing.type === 'npc') {
        if (theEventType === 'goal') setTimeout(() => { document.querySelector('#eventTrigger a').click() }, 1500)
        else setTimeout(() => { document.querySelector('#eventTrigger > button').click() }, 1500);
      } else if (nextChecked === true && playing.type === 'ply') {
        document.querySelector('#eventTrigger').style.pointerEvents = 'auto'
      } else {
        document.querySelector('#eventTrigger').style.pointerEvents = 'none';
      }
    }
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
        <div id='eventMenu'>
          <Event findSpot={ this.findSpot }/>
        </div>
      </div>
    )
  }
}

export default Game;