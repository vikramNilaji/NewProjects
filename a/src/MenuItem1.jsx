import React from "react";
import MenuList1 from "./MenuList1";
import { useState } from "react";
const MenuItem1 = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});
  function handleDisplayChildren(currentLabel) {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [currentLabel]: !displayCurrentChild[currentLabel],
    });
  }
  return (
    <div>
      {item.label}
      {item && item.children && item.children.length ? (
        <span onClick={() => handleDisplayChildren(item.label)}>
          {displayCurrentChild[item.label] ? "+" : "-"}
        </span>
      ) : null}
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChild[item.label] ? (
        <MenuList1 List={item.children} />
      ) : null}
    </div>
  );
};

export default MenuItem1;
