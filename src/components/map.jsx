import React, { Component } from 'react';

import '../css/style.css';
// import '../css/map.css';

import Chess from './chess';
import Cell from '../containers/cell';

const Map = () => {
  return(
    <div id='mapWrap'>地圖 Wrap
      <Chess />
      <Cell />
    </div>
  )
}

export default Map;