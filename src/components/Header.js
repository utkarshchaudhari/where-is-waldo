import React from 'react';
import Timer from './Timer';

function Header({ number, timeIsRunning }) {
  return (
    <header>
      <div className="title">
        Find<span className="red">Us</span>
      </div>
      <Timer timeIsRunning={timeIsRunning} />
      <div className="items_left">{number}</div>
    </header>
  );
}

export default Header;
