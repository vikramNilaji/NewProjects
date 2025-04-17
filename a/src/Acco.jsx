import React, { useState } from "react";
import Data from "./Data.js";

const Acco = () => {
  const [selectedId, setSelectedId] = useState([]);
  const [SingleSelection, setSingleSelection] = useState(false);

  function SingleSelectionHandle(DataId) {
    setSelectedId(selectedId.includes(DataId) ? [] : [DataId]);
    console.log(DataId);
  }

  function MultiSelectionHandle(DataId) {
    if (selectedId.includes(DataId)) {
      setSelectedId(selectedId.filter((id) => id !== DataId));
    } else {
      setSelectedId([DataId, ...selectedId]);
    }
  }
  return (
    <>
      <div>
        {
          <button onClick={() => setSingleSelection(!SingleSelection)}>
            {SingleSelection ? "SingleSelection" : "MultiSelection"}
          </button>
        }
        {Data.map((items, id) => {
          return (
            <div key={id}>
             <h2>{items.Id}</h2>
              <h2
                onClick={
                  SingleSelection
                    ? () => MultiSelectionHandle(items.Id)
                    : () => SingleSelectionHandle(items.Id)
                }
              >
                {items.Question}
              </h2>
              {selectedId.includes(items.Id) ? <h2>{items.Answer}</h2> : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Acco;

