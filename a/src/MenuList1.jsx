import React from "react";
import MenuItem1 from "./MenuItem1";


const MenuList1 = ({ List = [] }) => {
  return (
<ul> {List.map((item,index)=>{return(<MenuItem1 key={index} item={item}></MenuItem1>)})}</ul>
  );
};

export default MenuList1;