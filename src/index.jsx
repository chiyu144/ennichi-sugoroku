import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/style.css';

class App extends Component {
  render () {
    return <p> Hello React!</p>;
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));