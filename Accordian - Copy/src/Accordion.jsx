import data from "./data.js";
import { useState } from "react";

const Accordion = () => {
  const [dataId,setDataId]=useState(null)

  const[enableMultiSelection,setEnableMultiSelection]=useState(false)
  const[multiple,setMultiple]=useState([])
  function handleSingleSelection(Item) {
    console.log(Item);
    setDataId(Item === dataId ?  null : Item)
  }

  function handleMultiSelection(dataId){
    let copyMultiple=[...multiple]
     const findIndexOfCurrentId=copyMultiple.indexOf(dataId)  
     console.log(findIndexOfCurrentId);
     if()
  }
  return (
    <>
    <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)} style={{height: "60px" ,width: "200px"}}  >EnableMultiSelection</button>

      {data.map((dataItems, index) => {
        return (
          <div key={index}>
            {/* <h1>{dataItems.id}</h1>
            <h1>{dataItems.Question}</h1> */}
            <h1>{dataItems.Question}</h1>
            <h1 onClick={ enableMultiSelection? ()=>handleMultiSelection(dataItems.id): ()=>handleSingleSelection(dataItems.id)}>+ </h1>
            <div> {dataId === dataItems.id ? <div>{dataItems.Answer}</div> : null}</div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
