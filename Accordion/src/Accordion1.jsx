import React from "react";
import Data from "./Data.js";
import { useState } from "react";

const Accordion1 = () => {
  const [idSelection, setIdSelection] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(DataItemId) {
    setIdSelection(idSelection.includes(DataItemId) ? [] : [DataItemId]);
    console.log(DataItemId);
  }
  function handleMultiSelection(DataItemId) {
    if (idSelection.includes(DataItemId)) {
      setIdSelection(idSelection.filter((id) => id !== DataItemId));
      console.log(DataItemId)
      console.log(idSelection)
    } else {
      setIdSelection([...idSelection, DataItemId]);
      console.log(DataItemId)
      console.log(idSelection)
    }
  }

  return (
    <div>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      {Data.map((DataItems, index) => (
        <div key={index}>
          <h2>
            {DataItems.id} {")"}
          </h2>
          <h2>{DataItems.Question}</h2>
          <h2
            onClick={
              enableMultiSelection
                ? () => handleMultiSelection(DataItems.id)
                : () => handleSingleSelection(DataItems.id)
            }
          >
            {" "}
            {idSelection.includes(DataItems.id) ? "-" : "+ "}
          </h2>
          {idSelection.includes(DataItems.id) ? (
            <h2>{DataItems.Answer}</h2>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Accordion1;
