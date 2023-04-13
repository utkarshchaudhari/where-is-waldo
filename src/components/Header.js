import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Timer from './Timer';

function Header({ list, timeIsRunning, timeRef, restartGame }) {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <header>
      <div className="title" onClick={restartGame}>
        Find<span className="red">Us</span>
      </div>
      <Timer timeIsRunning={timeIsRunning} timeRef={timeRef} />
      <div>
        <button
          className="items_left"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          {list.length}
        </button>
        {dropdownMenu && <DropdownMenu list={list} />}
      </div>
    </header>
  );
}

export default Header;
