import React, { Component } from 'react';

import '../css/style.css';
import '../css/chess.css';

class Chess extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      plyList
    } = this.props;
    
    return(
      plyList.map((chess, i) => {
        return (
          <div key={i} data-confirm={chess.uid}
               style={{
                 left: chess.offset.x, top: chess.offset.y,
                //  transform: `translateX(${chess.offset.x}px) translateY(${chess.offset.y}px)`,
               }} className='chess'>
            {/* <p>{chess.name}</p> */}
            <img src={ chess.icon }></img>
          </div>
        )
      })
    )
  }
}
  
export default Chess;