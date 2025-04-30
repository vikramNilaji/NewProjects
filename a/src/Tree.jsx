import React from "react";
import MenuList from "./MenuList"
import './tree.css'

import { Sidemenu } from "./Sidemenu";

const Tree = ({ Sidemenu = [] }) => {
  return <div className="tree-view-container"> <MenuList list={Sidemenu}/> </div>;
};

export default Tree;
