import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listItem,index) => {
            return <MenuItem item={listItem} key={index} />;
          })
        : null}
    </div>
  );
};

export default MenuList;
