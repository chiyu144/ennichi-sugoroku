import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import Popup from 'reactjs-popup';

import '../css/style.css';
import '../css/character.css';

class Character extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setPlyType(this.props.plyNum);
    this.characterSelect(this.props.isSelecting);
  }

  componentDidUpdate(prevProps) {
    let prevSelecting = prevProps.isSelecting;
    let nextSelecting = this.props.isSelecting;
    if (prevSelecting !== nextSelecting) {
      this.characterSelect(nextSelecting);
    }
  }
  
  // 新選角色邏輯，DidMount 時就執行，再來接 DidUpdate
  characterSelect(plyIndex) {
    if (plyIndex + 1 > 4) {
      return
    } else {
      let candidate = document.querySelectorAll('.candidate');
      candidate.forEach(cd => {
        if (cd.className === 'candidate charaSelected') {
        cd.setAttribute('disabled', true) }
      });

      let charaOption = document.querySelector('#charaOption');
      charaOption.style.pointerEvents = 'auto';
      
      let elect = document.querySelectorAll('.elect')[plyIndex];
      let decideBtn = elect.querySelector('.decideBtn');

      elect.classList.add('electing');
      decideBtn.classList.add('decideBtnActive');

      decideBtn.addEventListener('click', (e) => this.deciding(e, candidate, plyIndex, charaOption));
    }
  }

  // 決定鈕 CallBack
  deciding(e, candidate, plyIndex, charaOption) {
    // 被選走的角色不能重複再被選
    candidate.forEach( cd => {
      if (cd.classList.contains('charaActive')) {
        // 決定按下去，觸發 action，elect 格子要顯示大頭 + 名字（舊版的：set ply name，新增 visual、chessVisual、icon）
        this.props.setPlyInfo(cd.getAttribute('data-index'), plyIndex);
        cd.className = ('candidate charaSelected');
        // 選好後，畫面顯示換下一個人選
        document.querySelectorAll('.elect')[plyIndex].classList.remove('electing');
        e.target.classList.remove('decideBtnActive');
        charaOption.style.pointerEvents = 'none';
        // 通知 Redux 換下一個人了
        this.props.updateIsSelecting(plyIndex + 1);
      }
    });
    this.checkPlySelect();
  }

  // 角色選項變色用
  toggling (e) {
    let option = document.querySelectorAll('.candidate')[0];
      while(option) {
          if(option.tagName === 'BUTTON') { option.classList.remove('charaActive') }
          option = option.nextSibling;
      }
      e.currentTarget.classList.add('charaActive');
  }

  // 檢查都選好沒
  checkPlySelect () {
    let drawLotsTrigger = document.querySelector('#drawLotsTrigger');
    let checkPlyNameArr = this.props.plyList.filter(p => { return p.name !== null });
    if (checkPlyNameArr.length < 4) {
      drawLotsTrigger.className = 'drawLots';
    } else {
      drawLotsTrigger.classList.add('readyToSlot');
    }
  } 

  // 洗牌
  shuffle(t) { // 括號記得加回 t
    const temp = t.slice(); // 好測試用，一步就贏：[1, 2, 3, 4, 5, 0, 7, 8, 6]
    for(let j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
    return temp;
  }

  // 抽順序
  drawLots (e) {
    let originPlyArr = [...this.props.plyList];
    let shufflePlyArr = this.shuffle(originPlyArr.map(op => { delete op.index; return op }));
    let newPlyArr = shufflePlyArr.map((np, i) => { np.index = i; return np });

    this.props.drawLotsAnime(newPlyArr);
    // 抽好後 Game Start 出來，抽按鈕消失
    e.target.style.display = 'none';
    document.querySelector('#gameStartLink').style.display = 'flex';
    document.querySelector('#gameStartLink').style.pointerEvents = 'auto';
  }

  render() {
    const {
      plyList, character, spin, bodyWidth
    } = this.props;
    return(
      <div id="character">
        <div id='charaForm'>
          <p>選擇 ::: 角色</p>
          <p>請依序選擇想要扮演的角色，選好後請抽籤決定遊玩順序，抽好後才可以開始遊戲喔！※ 如果有 NPC ，也請幫他 / 他們選個角色吧!</p>
          <Popup trigger={<button id="drawLotsTrigger" className='drawLots'> 抽順序! </button>}
          closeOnDocumentClick={false}
          overlayStyle={{
            background: 'rgb(255, 255, 255, 1)',
            animation: 'popupIn .3s'
          }}
          contentStyle={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            justifyContent: 'center'
          }}
          modal>
          { close => (
            <div id='rule'>
              <div className="ruleContent">
                <p>請抽籤決定遊玩順序吧!</p>
                <div id="machine">
                  <p>只能抽一次唷!</p>
                    <div id="slot">
                      { plyList.map((d, i) => {
                      return (
                        <div key={i} className='panel'>
                          <p>{ i+1 }</p>
                          <Spring
                            from={{
                              transform: 'rotateY(0deg)'
                            }}
                            to={{
                              transform: spin ? 'rotateY(360deg)' : 'rotateY(0deg)'
                            }}
                          >
                          { ({ transform }) =>
                            <div style={{ transform }} className="wheel">
                              { d.type === 'ply' && <p style={{ transform }}>玩家</p> }
                              { d.type === 'npc' && <p style={{ transform }}>NPC</p> }
                              <img src={ d.icon }></img>
                            </div>
                          }
                          </Spring>
                        </div>
                      )})}
                    </div>
                  <div id='drawLotsAction'>
                    <button id='drawLotsBtn' onClick={ (e) => { this.drawLots(e) }}>抽籤</button>
                    <button id='gameStartLink'><NavLink to='/game'>遊戲開始</NavLink></button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
          <div id='charaDecide'>
              { plyList.map((d, i) => {
                return (
                  <div key={i} data-confirm={d.uid} className='elect'>
                    { d.type === 'ply' && <p>玩家</p> }
                    { d.type === 'npc' && <p>NPC</p> }
                    <Spring
                      from={{
                        left: -300
                      }}
                      to={{
                        left: d.name !== null ? 0 : -300
                      }}>
                      { ({ left }) =>
                        <div style={{ left }} className="deciding">
                          { d.icon === null ? <img src={ require('../img/icon00.png') }></img> : <img src={ d.icon }></img> }
                        </div>
                      }
                    </Spring>
                    <button data-index={d.index} className='decideBtn'>決定</button>
                  </div>
              )})}
          </div>
          <div id='charaOption'>
          { character.map((c, i) => {
            return (
              <button key={i} data-index={c.index} className='candidate' onClick={(e) => { this.toggling(e) }}>
                <p>{ c.name }</p>
                <img className='pcVisual' src={ c.visual }></img>
                <img className='mobileVisual' src={ c.visualM }></img>
              </button>
          )})}
          </div>
        </div>
        
        
      </div>
    )
  }
}

export default Character;