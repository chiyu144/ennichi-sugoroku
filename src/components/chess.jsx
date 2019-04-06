import React, { Component } from 'react';

import '../css/style.css';
import '../css/chess.css';

const Chess = (props) => {
  console.log(props.chess);
  return(
    props.chess.chess.map((chess, i) => {
      return (
        <div key={i} className='chess'>
          <p>{chess.name}</p>
          <img></img>
        </div>
      )
    })
  )
}
  
export default Chess;