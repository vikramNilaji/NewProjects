import React from "react";
import MenuList1 from "./MenuList1";
import { useState } from "react";

const MenuItem1 = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleDisplayCurrentChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  console.log(displayCurrentChildren);

  return (
    <li>
      {item.label}{" "}
      {item && item.children && item.children.length ? (
        <span onClick={()=>handleDisplayCurrentChildren(item.label)}> {displayCurrentChildren[item.label] ? "-":"+"} </span>
      ) : null}
      <p>
        {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
          <MenuList1 List={item.children} />
        ) : null}{" "}
      </p>
    </li>
  );
};

export default MenuItem1;
 