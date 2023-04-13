import React from 'react';
import Timer from './Timer';

function Header({ number, timeIsRunning, timeRef }) {
  return (
    <header>
      <div className="title">
        Find<span className="red">Us</span>
      </div>
      <Timer timeIsRunning={timeIsRunning} timeRef={timeRef} />
      <div className="items_left">{number}</div>
    </header>
  );
}

export default Header;
