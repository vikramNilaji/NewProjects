import Data from "./Data.js";
import { useState } from "react";
function App() {
  const [selected, setSelected] = useState(null);
  const [EnableMultiSelection,setEnableMultiSelection]=useState(false)

  function HandleSingleButton(CurrentId) {
    return setSelected(CurrentId===selected? null:CurrentId);
  }

  function HandleMultiSelection(CurrentId) {
    setSelected(CurrentId)
  }

  return (
    <>
      <div>
      <button onClick={()=>setEnableMultiSelection(!EnableMultiSelection)}>EnableMultiSelection</button>
        {Data.map((dataItems, index) => (
          <div key={index}>
            <h1>{dataItems.Question}</h1>
            <h1 onClick={EnableMultiSelection ? ()=>HandleMultiSelection(dataItems.id):() => HandleSingleButton(dataItems.id)}>+</h1>
            {dataItems.id === selected ? <h1>{dataItems.Answer}</h1> : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
