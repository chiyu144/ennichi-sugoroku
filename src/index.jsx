import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';

import NavBar from './components/navBar';

const App = () => {
  return (
    <NavBar />
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));