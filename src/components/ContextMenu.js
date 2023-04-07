import React from 'react';

function ContextMenu({ xPos, yPos, handleClick }) {
  return (
    <div
      className="contextMenu"
      style={{
        top: `${yPos}px`,
        left: `${xPos}px`,
      }}
    >
      <ul className="contextMenu_list">
        <li onClick={(e) => handleClick(e.target.innerText)}>Bowser</li>
        <li onClick={(e) => handleClick(e.target.innerText)}>Yubaba</li>
        <li onClick={(e) => handleClick(e.target.innerText)}>The Knight</li>
      </ul>
    </div>
  );
}

export default ContextMenu;
