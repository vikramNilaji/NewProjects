import { useState } from "react";
import Data from "./Data.js";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [SingleSelection, MultiSelection] = useState(true);

  function HandleSelection(ItemId) {
    setSelected(selected.includes(ItemId) ? [] : [ItemId]);
  }

  function HandleMultiSelection(ItemId) {
    if (selected.includes(ItemId)) {
      setSelected(selected.filter((id) => id !== ItemId));
    } else {
      setSelected([...selected, ItemId]);
    }
  }

  return (
    <div className="accordion-container">
      <button onClick={() => MultiSelection(!SingleSelection)} className="toggle-button">
        {SingleSelection ? "Enable Multi Selection" : "Enable Single Selection"}
      </button>

      {Data.map((items, index) => (
        <div key={index}>
          <div
            className="accordion-header"
            onClick={() =>
              SingleSelection
                ? HandleSelection(items.id)
                : HandleMultiSelection(items.id)
            }
          >
            <span>{`${items.id}) ${items.question}`}</span>
            <span>{selected.includes(items.id) ? "-" : "+"}</span>
          </div>
          {selected.includes(items.id) && (
            <div className="accordion-answer">{items.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
