import React from 'react';

function Header({ number }) {
  return (
    <header>
      <div className="title">
        Find<span className="red">Us</span>
      </div>
      <div className="items_left">{number}</div>
    </header>
  );
}

export default Header;
