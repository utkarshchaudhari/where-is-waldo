import React, { useState } from 'react';
import gamePic from '../assets/game-pic.jpg';
import ContextMenu from './ContextMenu';

function Game() {
  const [contextMenu, setContextMenu] = useState(false);
  const [pos, setPos] = useState({});

  function userClick(e) {
    setPos({ x: e.pageX, y: e.pageY });
    setContextMenu(!contextMenu);
  }
  return (
    <div className="game_container" onClick={(e) => userClick(e)}>
      <img src={gamePic} alt="game-pic" className="game_img" />
      {contextMenu && <ContextMenu xPos={pos.x} yPos={pos.y} />}
    </div>
  );
}

export default Game;
