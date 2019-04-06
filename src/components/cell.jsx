import React, { Component } from 'react';

import '../css/style.css';
import '../css/cell.css';

const Cell = ( {cell} ) => {
  return(
    cell.map((cell, i) => {
      return <div key={i} className='cell'>{cell.index}</div>
    })
  )
}
  
export default Cell;