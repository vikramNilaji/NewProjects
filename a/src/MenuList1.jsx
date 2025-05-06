import React from 'react';
import MenuItem1 from './MenuItem1';

const MenuList1 = ({ List = [] }) => {
  return (
    <ul>
      {List.map((item, index) => {
        return (
          <div key={index}>
            <MenuItem1 item={item}/>
          </div>
        );
      })}
    </ul>
  ); 
};

export default MenuList1;

