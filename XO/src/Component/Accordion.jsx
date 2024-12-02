import data from "./data.js";
import { useState } from "react";

const Accordion = () => {

  const [answer,setAnswer]=useState("+")
  const [selected,setSelected]=useState(null)

function handleSelection(value){
setAnswer(value)
}

  return (
    <>
      <h1>Accordion</h1>

      {data && data.length > 0 ? (
        data.map((value, index) => (
          <div key={index}>
            {/* <h1>{value.id}</h1> */}
            <h1>{value.question}</h1>
            {/* <h1>{value.answer}</h1> */}

            <div> { selected === value.id ? <span onClick={()=>handleSelection(value.answer) } : null >{}</span>}</div>
         
          </div>
        ))
      ) : ( 
        <div> Nothing is here</div>
      )}
    </>
  ); 
};

export default Accordion;
  