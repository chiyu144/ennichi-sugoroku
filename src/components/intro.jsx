import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

import '../css/style.css';
import '../css/intro.css';

import logo from '../img/logo.png';
import circle from '../img/circle.png';
import hanabi from '../img/hanabi.png';

import Rule from './rule';

class Intro extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='intro'>
        <div className='circle'>
          <img src={ circle } />
        </div>
        <Spring
          from={{
            top: '200px' 
          }}
          to={{
            top: '0'
          }}
        >
        { ({ top }) =>
          <div style={{ top }} className='hanabi'>
            <img src={ hanabi } />
          </div>
        }
        </Spring>
        <Spring
          delay={ 300 }
          from={{
            opacity: 0,
            top: '350px'
          }}
          to={{
            opacity: 1,
            top: '0'
          }}>
          { ({ opacity, top }) =>
            <div id='introContent'>
              <div style={{ opacity }} id='introLogo'>
                <img src={ logo } />
              </div>
              <ul style={{ opacity, top }} id='introSelect'>
                <li><button className="introBtn"><NavLink to='/character' onClick={ () => this.props.setPlyNum(1) }>一人遊玩</NavLink></button></li>
                <li><button className="introBtn"><NavLink to='/character' onClick={ () => this.props.setPlyNum(2) }>兩人遊玩</NavLink></button></li>
                <li><button className="introBtn"><NavLink to='/character' onClick={ () => this.props.setPlyNum(3) }>三人遊玩</NavLink></button></li>
                <li><button className="introBtn"><NavLink to='/character' onClick={ () => this.props.setPlyNum(4) }>四人遊玩</NavLink></button></li>                  
                <li><Rule /></li>
              </ul>
            </div>
          }
        </Spring>
      </div>
    )
  }
}

export default Intro;