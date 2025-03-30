import React, { useState } from "react";
import Data from "./Data.js";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(true);

  function SingleHandleClick(currentId) {
    setSelected(selected.includes(currentId) ? [] : [currentId]);
  }

  function MultiHandleClick(currentId) {
    if (selected.includes(currentId)) {
      setSelected(selected.filter((id) => id));
    } else {
      setSelected([...selected, currentId]);
    }
  }

  function ToggleMultiSelectionButton() {
    setEnableMultiSelection(!enableMultiSelection);
  }
  return (
    <>
      <div>
        <button onClick={ToggleMultiSelectionButton}>
          {" "}
          {enableMultiSelection ? "MultiSlection" : "SingleSelection"}
        </button>
        {Data.map((items, id) => {
          return (
            <div key={id}>
              <h2>{items.id}</h2>
              <h2>{items.question}</h2>
              <h2
                onClick={
                  enableMultiSelection
                    ? () => SingleHandleClick(items.id)
                    : () => MultiHandleClick(items.id)
                }
              >
                {" "}
                +{" "}
              </h2>
              {selected.includes(items.id) ? <h2> {items.answer}</h2> : []}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
