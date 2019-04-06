import React, { Component } from 'react';
import Popup from 'reactjs-popup';

import '../css/style.css';

const Rule = () => {
  return (
    <Popup trigger={<button className="introBtn"> 遊戲說明 </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> 遊戲說明 </div>
          <div className="content">
            {' '}
            遊玩方法<br />
            參加人數<br />
            格子種類<br />
            迷你小遊戲
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                可能有用
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ')
                close()
              }}
            >
              返回首頁
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Rule;