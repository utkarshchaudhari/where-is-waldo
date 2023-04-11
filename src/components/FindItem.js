import React from 'react';

function FindItem({ item }) {
  return (
    <div className="item_root">
      <h3 className={item.itemLevel}>{item.itemLevel}</h3>
      <div className="item_container">
        <div className="item_img">
          <img className="item_img" src={item.itemPic} alt={item.itemName} />
        </div>
        <div className="item_description">
          <h3>{item.itemName}</h3>
          <h5>{item.itemDescription}</h5>
        </div>
      </div>
    </div>
  );
}

export default FindItem;
