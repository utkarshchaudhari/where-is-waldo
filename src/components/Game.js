import React, { useState, useRef } from 'react';
import gamePic from '../assets/game-pic.jpg';
import ContextMenu from './ContextMenu';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';

function Game() {
  const [contextMenu, setContextMenu] = useState(false);
  const [pos, setPos] = useState({});
  const [list, setList] = useState(['Bowser', 'Yubaba', 'The Knight']);
  const imgRef = useRef();

  async function userClick(e) {
    setPos({ x: e.pageX, y: e.pageY });
    setContextMenu(!contextMenu);
  }

  async function handleClick(itemName) {
    const coords = await getDoc(doc(db, 'coords', itemName));
    const itemCoords = coords.data();
    const x = +(pos.x / imgRef.current.offsetWidth).toFixed(2);
    const y = +((pos.y - 60) / imgRef.current.offsetHeight).toFixed(2);

    if (x === itemCoords.x && y === itemCoords.y) {
      console.log('Found it');
      setList((list) => list.filter((item) => item !== itemName));
    } else {
      console.log('Keep Looking');
    }
  }
  return (
    <div className="game_container" onClick={(e) => userClick(e)} ref={imgRef}>
      <img src={gamePic} alt="game-pic" className="game_img" />
      {contextMenu && (
        <ContextMenu
          xPos={pos.x}
          yPos={pos.y}
          handleClick={handleClick}
          list={list}
        />
      )}
    </div>
  );
}

export default Game;
