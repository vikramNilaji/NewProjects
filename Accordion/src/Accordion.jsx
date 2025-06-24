import { useState } from "react";
import Data from "./Data.js";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [SingleSelection, MultiSelection] = useState(true);

  function HandleSelection(ItemId) {
    setSelected(selected.includes(ItemId) ? [] : [ItemId]);
    console.log(selected);
  }

  function HandleMultiSelection(ItemId) {
    if (selected.includes(ItemId)) {
      setSelected(selected.filter((id) => id !== ItemId));
      console.log(selected);
    } else {
      setSelected([...selected, ItemId]);
    }
  }
  return (
    <>
      <button onClick={() => MultiSelection(!SingleSelection)}>
        {SingleSelection ? "EnableMultiSelection" : "EnableSingleSelection"}
      </button>
      {Data.map((items, index) => (
        <div key={index}>
          <h2>
            {items.id} {")"}
          </h2>
          <h2>{` Q: ${items.question}`}</h2>
          <h2
            onClick={() =>
              SingleSelection
                ? HandleSelection(items.id)
                : HandleMultiSelection(items.id)
            }
          >
            {selected.includes(items.id) ? "-" : "+"}
          </h2>
          {selected.includes(items.id) ? <h2>{`A: ${items.answer}`}</h2> : null}
        </div>
      ))}
    </>
  );
};

export default Accordion;
