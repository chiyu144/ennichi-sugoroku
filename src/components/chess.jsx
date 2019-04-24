import React, { Component } from 'react';

import '../css/style.css';
import '../css/chess.css';

class Chess extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() { console.log('YOOOOOOOO') }
  // componentWillUnmount() { console.log('YOOOOOOOO') }

  // componentDidUpdate(prevProps) {
    // props.id が変更されたら再フェッチ
    // if (this.props.name !== prevProps.name) {
    //   this.fetchUser(this.props.name);
    // }
  // }

  render() {
    const {
      plyList
    } = this.props;
    // console.log('傳到 Chess Component 裡的 props', this.props);
    return(
      plyList.map((chess, i) => {
        return (
          <div key={i} data-confirm={chess.uid}
               style={{
                 left: chess.offset.x, top: chess.offset.y,
                //  transform: `translateX(${chess.offset.x}px) translateY(${chess.offset.y}px)`,
               }} className='chess'>
            <p>{chess.name}</p>
          </div>
        )
      })
    )
  }
}
  
export default Chess;