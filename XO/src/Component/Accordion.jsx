import data from "./data.js";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  function handleAnswer(currentId) {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <>
      {data.map((dataItem, index) => {
        return (
          <div key={index} >
            <h1 className="background">{dataItem.question}</h1>

            <h1 onClick={() => handleAnswer(dataItem.id)}>
              + {selected === dataItem.id ? <div>{dataItem.answer} </div> : null}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
