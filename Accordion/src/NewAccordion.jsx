import React from "react";
import Data from "./Data.js";
import { useState } from "react";

const NewAccordion = () => {

  const [selectedId, setSelectedId] = useState([])
  const [SingleSelection, setSingleSelection] = useState(true)

  function SwitchButton() {
    setSingleSelection(!SingleSelection)
  }


  function HandleSingleSelection(currentId) {
    setSelectedId(selectedId.includes(currentId) ? [] : [currentId])
    console.log(currentId)
  }


  function HandleMultiSelection(currentId) {

    if (selectedId.includes(currentId)) {
      setSelectedId(selectedId.filter((id) => id !== currentId))
    }
    else {
      setSelectedId([...selectedId, currentId])
    }
  }
  return (
    <div>
      <button onClick={SwitchButton}>{SingleSelection ? 'MultiSelection': 'SingleSelection'  } </button>

      {Data.map((items, index) => {
        return (
          <div key={index}>
            <div>{items.id}</div>
            <div>{items.question}</div>
            <div onClick={SingleSelection?() => HandleSingleSelection(items.id) : ()=> HandleMultiSelection(items.id) } >+</div>
            <div> {selectedId.includes(items.id) ? items.answer : []}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NewAccordion;
