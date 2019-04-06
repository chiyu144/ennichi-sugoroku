import React, { Component } from 'react';

import '../css/style.css';
import '../css/game.css';

import Map from './map';

const Game = () => {
  return(
    <div id="game">
      <p>Game Start (Game)</p>
      <div id="plyUI">玩家操作介面 fixed 在右邊</div>
      <Map />
    </div>
  )
}

export default Game;