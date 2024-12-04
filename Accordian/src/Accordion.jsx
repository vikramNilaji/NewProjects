import data from "./data.js";
import { useState } from "react";

const Accordion = () => {
  const [dataId,setDataId]=useState(null)
  function handleButton(Item) {
    console.log(Item);
    setDataId(Item === dataId ?  null : Item)
  }
  return (
    <>
      {data.map((dataItems, index) => {
        return (
          <div key={index}>
            {/* <h1>{dataItems.id}</h1>
            <h1>{dataItems.Question}</h1> */}
            <h1>{dataItems.Question}</h1>
            <h1 onClick={()=>handleButton(dataItems.id)}>+ </h1>
            <div> {dataId === dataItems.id ? <div>{dataItems.Answer}</div> : null}</div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
