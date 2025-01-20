import { useState } from "react";
import Data from "./Data.js";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function HandleSingleSelection(DataItemId) {
    setSelected(DataItemId === selected ? null : DataItemId);
  }

  function HandleMultiSelection(DataItemId) {
    setSelected(DataItemId)
    
  }
  return (
    <>
      <h1>Accordion</h1>

      <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      {Data.map((DataItem, index) => (
        <div key={index}>
          <h2>{DataItem.Question}</h2>
          <h2 onClick={ enableMultiSelection ? ()=> HandleMultiSelection(DataItem.id[1,2,3]) : () => HandleSingleSelection(DataItem.id)}>+</h2>
          {selected === DataItem.id ? <h1>{DataItem.Answer}</h1> : null}
        </div>
      ))}
    </>
  );
};

export default App;
