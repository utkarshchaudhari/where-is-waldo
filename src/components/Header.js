import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import Timer from './Timer';

function Header({ number, timeIsRunning, timeRef, restartGame }) {
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
          {number}
        </button>
        {dropdownMenu && <DropdownMenu />}
      </div>
    </header>
  );
}

export default Header;
