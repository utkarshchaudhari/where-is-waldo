import React from 'react';

function ContextMenu({ xPos, yPos }) {
  return (
    <div
      className="contextMenu"
      style={{
        top: `${yPos}px`,
        left: `${xPos}px`,
      }}
    >
      <ul className="contextMenu_list">
        <li>Bowser</li>
        <li>Yubaba</li>
        <li>The Knight</li>
      </ul>
    </div>
  );
}

export default ContextMenu;
