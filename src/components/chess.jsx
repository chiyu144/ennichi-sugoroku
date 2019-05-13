import React, { Component } from 'react';

import '../css/style.css';
import '../css/chess.css';

class Chess extends Component {
  render() {
    const {
      chessRef,
      uid,
      icon,
      offset,
    } = this.props;
    return(
      <div data-confirm={uid} ref={ chessRef }  className='chess'
           style={{ left: offset.x, top: offset.y, }}>
        <img src={ icon }></img>
      </div>
    )
  }
}
  
export default Chess;