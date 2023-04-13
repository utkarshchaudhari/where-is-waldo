import React from 'react';
import gamePic from '../assets/game-pic.jpg';
import FindItemList from './FindItemList';

function Modal({ toggleModal }) {
  return (
    <div id="modal">
      <div className="modal_root">
        <h1>
          Find<span className="red">Us</span>
        </h1>
        <div className="modal_container">
          <div className="left_container">
            <img src={gamePic} alt="gamePic" />
          </div>
          <div className="right_container">
            <h2>The Universe</h2>
            <FindItemList />
            <button className="btn" onClick={toggleModal}>
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
