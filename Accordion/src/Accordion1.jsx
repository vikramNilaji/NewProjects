import { useState } from "react";
import Data from "./Data.js";

const Accordion1 = () => {
  const [idSelection, setIdSelection] = useState([]);


  function HandleSingleSelection(DataItemId) {
    setIdSelection(idSelection.includes(DataItemId) ? [] : [DataItemId]);
    console.log(DataItemId);
    console.log(idSelection);
  }

  return (
    <>
      {Data.map((DataItems, index) => (
        <div key={index}>
          <h3>
            {DataItems.id} {")"}
          </h3>
          <h3>{DataItems.Question}</h3>{" "}
          <h2 onClick={() => HandleSingleSelection(DataItems.id)}>
            {idSelection.includes(DataItems.id) ? "-" : "+"}
          </h2>
          {idSelection.includes(DataItems.id) ? (
            <h3>{DataItems.Answer}</h3>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Accordion1;
