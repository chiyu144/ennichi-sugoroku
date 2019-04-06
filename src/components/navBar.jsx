import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, NavLink } from 'react-router-dom';

import '../css/style.css';

import navTop from '../img/navTop.svg';

import Intro from './intro';
import Game from './game';

const NavBar = () => {
  return (
    <HashRouter> {/* basename={'/Ennichi-Sugoroku'} */}
      <nav>
        <div className='navItem'>
          <NavLink to='/'></NavLink>
          <img src={ navTop } />
        </div>
      </nav>
        <Route exact path='/' render={ () => <Intro /> } />
        <Route path='/game' render={ () => <Game /> } />
      {/* <footer>11111111111111</footer> */}
    </HashRouter>
  )
}

export default NavBar;