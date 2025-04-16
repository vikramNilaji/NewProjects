import React from "react";
import Data from "./Data.js";
import { useState } from "react";

const Acco = () => {
  const [selectedId, setSelectedId] = useState(null);

  function HandleButton(currentId) {
    setSelectedId(currentId);
    console.log(currentId);
  }

  return (
    <>
      {Data.map((Items, id) => {
        return (
          <div key={id}>
            <h2>{Items.Id}</h2>{" "}
            <h2 onClick={() => HandleButton(Items.Id)}>{Items.Question}</h2>{" "}
            {selectedId === Items.Id ? <h2>{Items.Answer}</h2> : null}
          </div>
        );
      })}
    </>
  );
};

export default Acco;
