import React, { useState } from "react";
import "./src/App.css";

// const Calculator = () => {
//   const characters = [
//     [1, 2, 3, "+"],
//     [4, 5, 6, "-"],
//     [7, 8, 9, "x"],
//     ["/", "%", "=", "C"],
//   ];

//   const [text, setText] = useState("");
//   // const [count,setCount]= useState(0)

//   function inputHandle(e) {
//     setText(e.target.value);
//   }

//   function calcHandle(event) {
//     setText((prev) => prev + event.target.innerHTML);
//     // setText((prev) => prev + event.target.innerHTML);
//     // setCount((prev1)=>prev1+1)
//     // setCount((prev1)=>prev1+1)
//   }

//   return (
//     <div className="Box">
// {/*
//     <h1>{count}</h1>
//     <button onClick={calcHandle}>Click</button> */}
//       <input
//         onChange={inputHandle}
//         value={text}
//         className="input"
//         type="text"
//       />

//       {characters.map((items, index) => (
//         <ul className="Container" key={index}>
//           {items.map((dataItem, idx) => (
//             <li onClick={calcHandle} key={idx}>
//               {dataItem}
//             </li>
//           ))}
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default Calculator;

const Calculator = () => {
  const [text, setText] = useState("");
  

  function TextHandle(event) {
    setText(event.target.value);
  }

  function ButtonsHandler(event1) {
    setText((prev) => prev + event1.target.innerHTML);
  }

  let Characters = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, "/", "*"],
    ["-", "x", "+", "C"],
  ];

 
    
  return (
    <>
      <div className="Box">
        <input
          className="input"
          type="text"
          value={text}
          onChange={TextHandle}
        />

     
        {Characters.map((items, index) => {
          return (
            <ul className="Container" key={index}>
              {items.map((items1, index1) => {
                return (
                  <li onClick={ButtonsHandler} key={index1}>
                    {items1}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Calculator;
