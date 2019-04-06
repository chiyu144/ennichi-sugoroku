import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

import '../css/style.css';
import '../css/intro.css';

import logo from '../img/logo.png';
import circle from '../img/circle.png';
// import leaf from '../img/leaf.png';

import Character from '../containers/character';
import Rule from './rule';

const Intro = () => {
  return (
        <div id='intro'>
          <div className='circle'>
            <img src={ circle } />
          </div>
          <Spring
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
                  <li><Character /></li>
                  <li><Rule /></li>
                </ul>
              </div>
            }
          </Spring>
        </div>
  )
}

export default Intro;