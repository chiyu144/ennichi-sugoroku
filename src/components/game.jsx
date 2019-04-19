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

  // componentWillUnmount() { console.log('YOOOOOOOO') }

  render() {
    const {
      plyNum
    } = this.props;
    // console.log('傳到 Game Component 裡的 props', this.props);
    return(
      <div id="game">
        <Chess />
        <input type="checkbox" id="eventShower"></input>
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