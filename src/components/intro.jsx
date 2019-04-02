import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/style.css';

import Rule from './rule';

class Intro extends Component {
    constructor(props) {
      super(props); 
      this.state = {  };
    }
    render () {
      return (
        <div>
          <p>酷炫 Text Animation + 美美 Logo + 美美背景</p>
          <ul>
            <li><NavLink to='/game'>一人遊玩</NavLink></li>
            <li><Rule /></li>
          </ul>
        </div>
      );
    }
}

export default Intro;