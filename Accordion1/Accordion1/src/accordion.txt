import { useState } from "react";
import Data from "./Data.js";
import "./style.css"

const Accordion1 = () => {
  const [idSelection, setIdSelection] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function HandleSingleSelection(DataItemId) {
    setIdSelection(idSelection.includes(DataItemId) ? [] : [DataItemId]);
    console.log(DataItemId);
    console.log(idSelection);
  }

  function HandleMultiSelection(DataItemId) {
    if (idSelection.includes(DataItemId)) {
      setIdSelection(idSelection.filter((id) => id !== DataItemId));
    }

    else{
      setIdSelection([...idSelection,DataItemId])
    }
  }

  return (
    <>  <div className="background">
      <button  className= "button" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {" "}
        {enableMultiSelection
          ?  "DisableMultiSelection" : "EnableMultiSelection"
           }{" "} 
      </button>

      <div className="content">
      {Data.map((DataItems, index) => (
        <div key={index} className="Content">
          <h3>
            {DataItems.id} {")"}
          </h3>
          <h3>{DataItems.Question}</h3>{" "}
          <h2
            onClick={
              enableMultiSelection
                ? 
                () => HandleMultiSelection(DataItems.id) : () => HandleSingleSelection(DataItems.id)
            }
          >
            {idSelection.includes(DataItems.id) ? "-" : "+"}
          </h2>
          {idSelection.includes(DataItems.id) ? (
            <h3>{DataItems.Answer}</h3>
          ) : null}
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default Accordion1;
