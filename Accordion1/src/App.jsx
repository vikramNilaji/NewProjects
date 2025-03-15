import { useState } from "react";
import "./App.css";
import Data from "./Data";
import { useEffect } from "react";

function App() {
  const [selectedId, setSelectedId] = useState([]);
  function SingleButtonHandle(ItemId) {
    setSelectedId(selectedId.includes(ItemId) ? [] : [ItemId]);
    console.log(setSelectedId);
  }

  function MultiSelectionHandle(ItemId) {
    if (selectedId.includes(ItemId)) {
      setSelectedId(selectedId.filter((id) => id !== ItemId));
      console.log(selectedId);
    } else {
      setSelectedId([...selectedId, ItemId]);
      console.log(setSelectedId);
    }
  }

  const [SingleSelection, setSingleSelection] = useState(true);
  function SelectionHandler() {
    setSingleSelection(!SingleSelection);
  }

  // useEffect(() => {
  //   console.log("Updated selectedId:", selectedId);
  // }, [selectedId]);

  return (
    <>
      {
        <button onClick={SelectionHandler}>
          {SingleSelection ? "MultiSelection" : "SingleSelection"}
        </button>
      }
      {Data.map((items, id) => (
        <div key={id}>
          <h3>{items.id}</h3>
          <h3>{items.question}</h3>
          <h3>
            {" "}
            <button
              onClick={
                SingleSelection
                  ? () => SingleButtonHandle(items.id)
                  : () => MultiSelectionHandle(items.id)
              }
            >
              Answer
            </button>
          </h3>
          {selectedId.includes(items.id) ? <h3>{items.answer}</h3> : null}
        </div>
      ))}
    </>
  );
}

export default App;
