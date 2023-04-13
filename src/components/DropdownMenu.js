import React from 'react';
import FindItemList from './FindItemList';

function DropdownMenu({ list }) {
  return (
    <div className="dropdown_menu">
      <FindItemList list={list} />
    </div>
  );
}

export default DropdownMenu;
