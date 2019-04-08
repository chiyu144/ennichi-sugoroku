import React, { Component } from 'react';
import Popup from 'reactjs-popup';

import '../css/style.css';
import '../css/rule.css';

const Rule = () => {
  return (
    <Popup
      overlayStyle={{
        background: 'rgb(255, 255, 255, 0.7)',
        animation: 'popupIn .3s'
      }}
      contentStyle={{
        width: '100%',
        background: 'transparent',
        border: 'none',
        display: 'flex',
        justifyContent: 'center'
      }}
      trigger={ <button className="introBtn"> 遊戲說明 </button> } modal>
      { close => (
        <div id='rule'>
          <a className="ruleCloseBtn" onClick={close}>
            <span></span>
            <span></span>
            {/* &times; */}
          </a>
          <div className="ruleContent">
              <p> 遊戲說明 </p>
              <dl>
                {' '}
                <dt>About</dt>
                <dd>緣日雙六 - HANABI - 是一款以夏日祭典為主題的日式大富翁遊戲。</dd>
                <dt>參賽規則</dt>
                <dd>每局固定 4 位選手參賽，玩家先選擇幾人遊玩，不足的人數將由電腦 NPC 擔當。人數確定後，玩家再替自己跟 NPC 選擇要扮演的角色，接著抽籤決定好遊玩順序後即可開始遊戲。</dd>
                <dt>遊玩方法</dt>
                <dd>玩家依序擲骰子，依骰到的數字前進，途中將遭遇各種隨機事件，先到達終點者勝利，其餘玩家將依當下距離終點的遠近排名。</dd>
              </dl>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Rule;