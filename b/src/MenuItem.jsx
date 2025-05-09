import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function HandleChildren(getCurrentLabel){
    setDisplayCurrentChildren({...displayCurrentChildren,[getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]})
  }
  return (
    <>
      {/* // <div>{item[0] ? item.label : "no item"}</div> */}
      <div>{item.label}</div>
      <div>{item && item.children && item.children.length > 0  ? <span onClick={()=>HandleChildren(item.label)}>+</span> : null }</div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList List={item.children} />
      ) : null}
    </>
  );
};

export default MenuItem;
