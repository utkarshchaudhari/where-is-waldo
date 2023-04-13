import React from 'react';
import bowserPic from '../assets/bowser.png';
import yubabaPic from '../assets/yubaba.png';
import knightPic from '../assets/the-knight.webp';
import FindItem from './FindItem';
import { v4 } from 'uuid';

function FindItemList({ list = ['Bowser', 'Yubaba', 'The Knight'] }) {
  const data = [
    {
      itemName: 'Bowser',
      itemLevel: 'easy',
      itemDescription: 'Super Mario Bros',
      itemPic: bowserPic,
    },
    {
      itemName: 'Yubaba',
      itemLevel: 'medium',
      itemDescription: 'Spirited Away',
      itemPic: yubabaPic,
    },
    {
      itemName: 'The Knight',
      itemLevel: 'hard',
      itemDescription: 'Hollow Knight',
      itemPic: knightPic,
    },
  ];
  return (
    <div className="items_container">
      {data.map((item) =>
        list.includes(item.itemName) ? (
          <FindItem item={item} key={v4()} />
        ) : (
          <FindItem item={item} key={v4()} itemFound=" item_found" />
        )
      )}
    </div>
  );
}

export default FindItemList;
