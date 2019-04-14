import React, { Component } from 'react';

import '../css/style.css';
import '../css/game.css';

import Map from './map';
import Chess from '../containers/chess';
import PlayerUI from '../containers/playerUI';

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
    console.log({ x: rect.left, y: rect.top });
    return { x: rect.left, y: rect.top } 
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
    console.log('傳到 Game Component 裡的 props', this.props);
    return(
      <div id="game">
        <Chess />
        <p>Game Start</p>
        <div id='board'>
          <Map />
        </div>
        <PlayerUI />
      </div>
    )
  }
}

export default Game;