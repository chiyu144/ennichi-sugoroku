import React, { Component } from 'react';

import '../css/style.css';
import '../css/chess.css';

class Chess extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() { console.log('YOOOOOOOO') }
  // componentWillUnmount() { console.log('YOOOOOOOO') }

  render() {
    const {
      plyList
    } = this.props;
    console.log('傳到 Chess Component 裡的 props', this.props);
    return(
      plyList.map((chess, i) => {
        return (
          <div key={i} style={{ left: chess.offset.x, top: chess.offset.y }} className='chess'>
            <p>{chess.name}</p>
          </div>
        )
      })
    )
  }
}
  
export default Chess;