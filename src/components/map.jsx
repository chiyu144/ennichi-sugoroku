import React, { Component } from 'react';

import '../css/style.css';
import '../css/map.css';

import Cell from '../containers/cell';
import Chess from '../containers/chess';

const Map = () => {
  return(
    <div id='map'>地圖
      <Chess />
      <Cell />
    </div>
  )
}

export default Map;