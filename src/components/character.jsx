import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';

import '../css/style.css';
import '../css/character.css';

class Character extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.setPlyType(this.props.plyNum);
  }
  
  // componentWillUnmount() { window.removeEventListener('DOMContentLoaded', this.props.setPlyType(this.props.plyNum)) }

  // 選擇鈕
  plySelect(e, plyListItem) {
    let elect = e.target.parentNode;
    let otherOptionBtns = document.querySelectorAll('.elect > button');
    let allKickOutBtns = document.querySelectorAll('.kickOutBtn');

    // 一個在選的時候，其他按鈕 + 自己的叉叉鈕要封起來
    otherOptionBtns.forEach(opb => {
      if(opb.getAttribute('data-confirm') !== elect.getAttribute('data-confirm')) {
        opb.setAttribute('disabled', true);
      }
    })

    let whoAmI = elect.querySelector('p');
    let whoAmIs = document.querySelectorAll('.elect > p');
    let decideBtn = elect.querySelector('.decideBtn');
    
    let kickOutBtn = elect.querySelector('.kickOutBtn');
    kickOutBtn.setAttribute('disabled', true)
    
    // 如果角色已經被別人選走就不能再重複選
    let candidate = document.querySelectorAll('.candidate');
    candidate.forEach(cd => {
      if (cd.className === 'candidate charaSelected') {
      cd.setAttribute('disabled', true) }
    });

    // 我現在是誰文字用
    let selecting = function(e) {
      whoAmI.textContent = e.target.textContent;
    }
    // 角色選項變色用
    let toggling = function(e) {
      let option = candidate[0];
        while(option) {
            if(option.tagName === 'BUTTON') { option.classList.remove('charaActive') }
            option = option.nextSibling;
        }
        e.target.classList.add('charaActive');
    }
    // 決定用
    let deciding = function() {
      candidate.forEach( cd => {
        cd.removeEventListener('click', selecting);
        cd.removeEventListener('click', toggling);
        if (cd.classList.contains('charaActive')) {
          cd.className = ('candidate charaSelected') }
      });
      preventReClickBtn();
      allKickOutBtns.forEach(akob => akob.removeAttribute('disabled'));
      checkPlySelect();
    }

    // 反悔用
    let regrating = function(e) {
      candidate.forEach(cd => {
        if (cd.classList.contains('charaSelected') && cd.textContent === whoAmI.textContent) {
          cd.removeAttribute('disabled');
          cd.classList.remove('charaSelected');
        }
      });
      e.target.parentNode.querySelector('p').textContent = '';
      preventReClickBtn();
      checkPlySelect();
    }
    
    // 選好要按叉叉再按選擇才可以重選，不可以直接按第二次選擇用
    let preventReClickBtn = function() {
      whoAmIs.forEach(wai => {
        if(wai.textContent === '') {
          wai.parentNode.querySelector('.selectBtn').removeAttribute('disabled');
          wai.parentNode.querySelector('.decideBtn').removeAttribute('disabled');
        } else { 
          wai.parentNode.querySelector('.selectBtn').setAttribute('disabled', true);
          wai.parentNode.querySelector('.decideBtn').setAttribute('disabled', true);
        }
      })
    }

    // 檢查都選好沒
    let checkPlySelect = function() {
      let plyNameArr = [];
      let drawLotsTrigger = document.querySelector('#drawLotsTrigger');
      whoAmIs.forEach(wai => { plyNameArr.push(wai.textContent) });
      let checkPlyNameArr = plyNameArr.filter(pn => { return pn !== '' });
      if (checkPlyNameArr.length < 4) {
        drawLotsTrigger.className = 'drawLotsNO';
      } else {
        drawLotsTrigger.className = 'drawLotsOK';
      }
    } 

    // charaOption 可以被選 + 被按會變色
    candidate.forEach( cd => {
      cd.addEventListener('click', selecting);
      cd.addEventListener('click', toggling);
    })

    // 決定鈕
    decideBtn.addEventListener('click', deciding);

    // 叉叉鈕
    kickOutBtn.addEventListener('click', regrating);
  }

  finalDecision () {
    let plyNameArr = [];
    // 把 .elect > p 裡面的文字抽出，推入上方 plyNameArr
    let electPArr = document.querySelectorAll('.elect > p');
    electPArr.forEach(ep => { plyNameArr.push(ep.textContent) });
    // 回傳給 characterReducer
    this.props.setPlyName(plyNameArr);
  }

  // 洗牌
  shuffle(t) { // 括號記得加回 t
    const temp = t.slice(); // 好測試用，一步就贏：[1, 2, 3, 4, 5, 0, 7, 8, 6]
    for(let j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
    return temp;
  }

  drawLots (e) {
    let originPlyArr = this.props.plyList;
    let shufflePlyArr = this.shuffle(originPlyArr.map(op => { return { uid: op.uid, type: op.type, name: op.name, outcome: op.outcome, offset: op.offset, inJail: op.inJail} }));
    let newPlyArr = shufflePlyArr.map((np, i) => { return { index: i, uid: np.uid, type: np.type, name: np.name, outcome: np.outcome, offset: np.offset, inJail: np.inJail} });
    this.props.drawLotsAnime(newPlyArr);
    // 抽好後 Game Start 出來，抽按鈕消失
    e.target.style.visibility = 'hidden';
    document.querySelector('#gameStartLink').style.opacity = 1;
    document.querySelector('#gameStartLink').style.pointerEvents = 'auto';
  }

  render() {
    const {
      plyList, character
    } = this.props;
    // console.log('傳到 Character Component 裡的 props', this.props);
    return(
      <div id="character">
        <p>請選擇角色吧 !</p>
        <div id='charaDecide'>
        { plyList.map((d, i) => {
          return (
            <div key={i} data-confirm={d.uid} className='elect'>
              { d.type }
              <p></p>
              <button data-confirm={d.uid} className='selectBtn' onClick={(e) => { this.plySelect(e, plyList[i]) }}>選擇</button>
              <button data-confirm={d.uid} className='decideBtn'>決定</button>              
              <button data-confirm={d.uid} className='kickOutBtn'>&times;</button>
            </div>
        )})}
        </div>
        <div id='charaOption'>
        { character.map((c, i) => {
          return (
            <button key={i} className='candidate'>
              {c.name}
            </button>
        )})}
        </div>
        <p>按下抽順序，就不能重選角色囉!</p>
        <Popup trigger={<button id="drawLotsTrigger" className='drawLotsNO'> 抽順序! </button>}
          onOpen={() => this.finalDecision()}
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
                          <div className="wheel">{ d.name }</div>
                        </div>
                      )})}
                    </div>
                  <button id='drawLotsBtn' onClick={ (e) => { this.drawLots(e) }}>抽</button>
                  <NavLink id={'gameStartLink'} to='/game'>Game Start</NavLink>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Character;