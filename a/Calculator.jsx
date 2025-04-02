import React from "react";

const Calculator = () => {
  let Characters = [[1, 2, 3,4], [5, 6, 7, 8]  [9, "+", "-", "x"] ,[ "/", "%"];
  return (
    <div>
      {Characters.map((items,index)=>{return( <ul>{items}</ul> )})}
    
           
    </div>
  );
};

export default Calculator;
