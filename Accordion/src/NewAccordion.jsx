import Data from "./Data";
import { useEffect, useState } from "react";

const NewAccordion = () => {
  const [selectedId, setSelectedId] = useState([]);
  const [SingleSelection, setSingleSelection] = useState(true);

  function HandleSingleSelection(DataId) {
    setSelectedId(selectedId.includes(DataId) ? [] : [DataId]);
    console.log(selectedId);
  }

  function HandleMultiSelection(DataId) {
    setSelectedId(
      selectedId.includes(DataId)
        ? (prev) => prev.filter((id) => id !== DataId)
        : (prev) => [...prev, DataId]
    );
    console.log(selectedId)
  }

  function ButtonHandler() {
    setSingleSelection(!SingleSelection);
  }

  return (
    <div>
      <button onClick={ButtonHandler}>
        {SingleSelection ? "Multi Selection" : "Single Selection"}
      </button>
      {Data.map((items, index) => {
        return (
          <div key={index}>
            <div>{items.id}</div>
            <div>{items.question}</div>
            <div
              onClick={
                SingleSelection
                  ? () => HandleSingleSelection(items.id)
                  : () => HandleMultiSelection(items.id)
              }
            >
              +
            </div>
            {selectedId.includes(items.id) ? <div>{items.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
};

export default NewAccordion;
