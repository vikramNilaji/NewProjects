import { useState } from "react";
import Data from "./Data.js";

const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function HandleSingleSelection(dataItemId) {
    setSelected(selected.includes(dataItemId) ? [] : [dataItemId]);

    console.log(selected);
  }

  function HandleToggleButton() {
    setEnableMultiSelection(!enableMultiSelection);
  }


  function HandleMultiSelection(dataItemId){
    if(selected.includes(dataItemId)){
      setSelected(selected.filter((id) => id !== dataItemId))
    }
    else {
      setSelected([...selected, dataItemId])
    }
  }

  return (
    <div>
      <button onClick={HandleToggleButton}>
        {enableMultiSelection
          ? "EnableSingleSelection"
          : "EnableMultiSelection"}
      </button>
      {Data.map((DataItems, index) => (
        <div key={index}>
          <h2>
            {DataItems.id} {`)`}
            {""}
          </h2>
          <h1>{DataItems.Question}</h1>
          <h2
            onClick={
              enableMultiSelection
                ? () => HandleMultiSelection(DataItems.id)
                : () => HandleSingleSelection(DataItems.id)
            }
          >
            {selected.includes(DataItems.id) ? "-" : "+"}
          </h2>
          <h1> {selected.includes(DataItems.id) ? DataItems.Answer : null}</h1>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
