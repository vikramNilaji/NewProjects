import Data from "./Data.js";
import { useState } from "react";

const NewAccordion = () => {
  const [selectedId, setSelectedId] = useState([]);
  const [SingleSelection, setSingleSelection] = useState(true);

  function HandleSingleClick(ItemId) {
    setSelectedId(selectedId.includes(ItemId) ? [] : [ItemId]);
    console.log(selectedId);
  }

  function HandleMultiClick(ItemId) {
    setSelectedId(
      selectedId.includes(ItemId)
        ? (selectedId) => selectedId.filter((id) => id !== ItemId)
        : (selectedId) => [...selectedId, ItemId]
    );
    console.log(selectedId)
  }

  return (
    <div>
      <button onClick={() => setSingleSelection(!SingleSelection)}>
        {SingleSelection ? "MultiSelection" : "SingleSelection"}{" "}
      </button>
      {Data.map((items, index) => {
        return (
          <div key={index}>
            <div>{items.id}</div>
            <div>{items.question}</div>
            <div
              onClick={
                SingleSelection
                  ? () => HandleSingleClick(items.id)
                  : () => HandleMultiClick(items.id)
              }
            >
              +
            </div>
            <div>
              {" "}
              {selectedId.includes(items.id) ? <div>{items.answer}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewAccordion;
