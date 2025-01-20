import { useState } from "react";
import Data from "./Data.js";

const App = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(DataItemId) {
    setSelected(selected.includes(DataItemId) ? [] : [DataItemId]);
  }

  function handleMultiSelection(DataItemId) {
    if (selected.includes(DataItemId)) {
      setSelected(selected.filter((id) => id !== DataItemId)); // Deselect if already selected
    } else {
      setSelected([...selected, DataItemId]); // Add to selected list
    }
  }

  return (
    <>
      <h1>Accordion</h1>

      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      {Data.map((DataItem, index) => (
        <div key={index}>
          <h2>{DataItem.Question}</h2>
          <h2
            onClick={() =>
              enableMultiSelection
                ? handleMultiSelection(DataItem.id)
                : handleSingleSelection(DataItem.id)
            }
            style={{ cursor: "pointer" }}
          >
            {selected.includes(DataItem.id) ? "-" : "+"}
          </h2>
          {selected.includes(DataItem.id) && <h1>{DataItem.Answer}</h1>}
        </div>
      ))}
    </>
  );
};

export default App;
