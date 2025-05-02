import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren)

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length  ? (
          <span onClick={() => handleToggleChildren(item.label)}> {displayCurrentChildren[item.label] ? <FaMinus/> : <FaPlus/> } </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

// const MenuItem = ({item}) => {
//   return <li> {item.label} </li>;
// };

export default MenuItem;
