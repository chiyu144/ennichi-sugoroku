import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import '../css/style.css';

import Intro from './intro';
import Game from './game';

const NavBar = () => {
  return (
    <BrowserRouter basename={'/Ennichi-Sugoroku'}>
      <div>
        <NavLink to='/'>Home（放個Logo）</NavLink>
        <Route exact path='/' render={ () => <Intro /> } />
        <Route path='/game' render={ () => <Game /> } />
      </div>
    </BrowserRouter>
  )
}

export default NavBar;