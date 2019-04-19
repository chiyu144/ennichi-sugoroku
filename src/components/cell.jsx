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
            <label htmlFor='eventShower' className='cytoplasm'>
              <p>{c.index + " " + c.event.type}</p>
              <span className='upperL'></span>
              <span className='upperR'></span>
              <span className='lowerR'></span>
              <span className='lowerL'></span>
            </label>
          </div>
      )})
    )
  }
}
  
export default Cell;