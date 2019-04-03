import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import createStore from './createStore';
const store = createStore();

import './css/style.css';

import NavBar from './components/navBar';

const App = () => {
  return (
    <NavBar />
  )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));