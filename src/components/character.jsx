import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';

import '../css/style.css';

// import Map from './map';

const Character = ( {ply, npc, character} ) => {
  return(
    <Popup trigger={ <button className="introBtn"> 一人遊玩 </button> } modal>
      { close => (
        <div id="character">
          <a onClick={ close }>
            &times;
          </a>
          <p>請選擇角色</p>
          <div className='charaOption'>
            {' '}
            <div>
              <img/>
            </div>
            <div>
              <img/>
            </div>
            <div>
              <img/>
            </div>
            <div>
              <img/>
            </div>
          </div>
          <NavLink to='/game'>Game Start</NavLink>
        </div>
      )}
    </Popup>
  )
}

export default Character;