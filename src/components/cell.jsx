import React, { Component } from 'react';

import '../css/style.css';
import '../css/cell.css';

class Cell extends Component {
  render() {
    const {
      cellRef,
      visualCell,
      curr
    } = this.props;
    return(
      <div className='cell' data-curr={ curr }
            ref={ cellRef } >
          <label htmlFor='eventShower' className='cytoplasm'
            style={ { backgroundImage: `url(${visualCell})` } }>
            <span className='upperL'></span>
            <span className='upperR'></span>
            <span className='lowerR'></span>
            <span className='lowerL'></span>
          </label>
      </div>
    )
  }
}
 
export default Cell;