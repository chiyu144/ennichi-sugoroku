import React, { Component } from 'react';

import '../css/style.css';
import '../css/map.css';

import Cell from '../containers/cell';

const Map = () => {
  return(
    <div id='map'>
      <div id='cellContainer'>
        <Cell />
      </div>
    </div>
  )
}

export default Map;