import React, { Component } from 'react';

import '../css/style.css';
import '../css/game.css';

import Map from './map';

class Game extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() { console.log('YOOOOOOOO') }
  // componentWillUnmount() { console.log('YOOOOOOOO') }

  render() {
    const {
      plyList
    } = this.props;
    console.log('傳到這個 Component 裡的 props', this.props);
    return(
      <div id="game">
        <p>Game Start (Game)</p>
        <div className='wrap'>
          <div id="plyUI">玩家操作介面 fixed 在右邊</div>
          <Map />
        </div>
      </div>
    )
  }
}

export default Game;