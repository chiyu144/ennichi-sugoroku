import React, { Component } from 'react';

import '../css/style.css';
import '../css/cell.css';

class Cell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      cell
    } = this.props;
    return(
      cell.map((c, i) => {
        return (
          <div key={i} data-curr={c.index} className='cell'>
            <div className='cytoplasm'>
              <p>{c.index + " " + c.event}</p>
              <span className='upperL'></span>
              <span className='upperR'></span>
              <span className='lowerR'></span>
              <span className='lowerL'></span>
            </div>
          </div>
      )})
    )
  }
}
  
export default Cell;