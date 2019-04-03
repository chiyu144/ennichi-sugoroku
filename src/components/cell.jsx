import React, { Component } from 'react';

import '../css/style.css';
import '../css/cell.css';

const Cell = (props) => {
  return(
    props.cell.cell.map((c, i) => {
      return <div key={i} className='cell'>{c.index}</div>
    })
  )
}
  
export default Cell;