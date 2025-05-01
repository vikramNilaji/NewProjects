import React from "react";
import MenuList from "./MenuList";
import "./tree.css";

const Tree = ({ Menu = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={Menu} />
    </div>
  );
};

export default Tree;
