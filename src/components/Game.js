import React from 'react';
import gamePic from '../assets/game-pic.jpg';

function Game() {
  return (
    <div className="game_container">
      <img src={gamePic} alt="game-pic" className="game_img" />
    </div>
  );
}

export default Game;
