import React, { Component } from 'react';
// import './css/style.css';

import dataMap from '../data/dataMap';

class Game extends Component {
    constructor(props) {
      super(props); 
      this.state = {  };
    }
    render () {
      console.log(dataMap);
      return (
        <div>
          <p>Game Start (Game)</p>
        </div>
      );
    }
}

export default Game;