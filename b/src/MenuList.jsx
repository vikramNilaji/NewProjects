import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ List = [] }) => {
  return (
    <div>

      {List.map((item, index) => {
        return (
          <div key={index}>
            <MenuItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
