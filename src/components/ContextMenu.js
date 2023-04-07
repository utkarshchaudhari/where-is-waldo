import React from 'react';
import { v4 } from 'uuid';

function ContextMenu({ xPos, yPos, handleClick, list }) {
  return (
    <div
      className="contextMenu"
      style={{
        top: `${yPos}px`,
        left: `${xPos}px`,
      }}
    >
      <ul className="contextMenu_list">
        {list.map((item) => (
          <li key={v4()} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
