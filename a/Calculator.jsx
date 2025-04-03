import React, { useState } from "react";
import "./src/App.css";

const Calculator = () => {
  const characters = [
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "x"],
    ["/", "%", "=", "C"],
  ];

  const [text, setText] = useState("");
  // const [count,setCount]= useState(0)

  function inputHandle(e) {
    setText(e.target.value);
  }

  function calcHandle(event) {
    setText((prev) => prev + event.target.innerHTML);
    // setText((prev) => prev + event.target.innerHTML);
    // setCount((prev1)=>prev1+1)
    // setCount((prev1)=>prev1+1)
  }

  return (
    <div className="Box">
{/* 
    <h1>{count}</h1>
    <button onClick={calcHandle}>Click</button> */}
      <input
        onChange={inputHandle}
        value={text}
        className="input"
        type="text"
      />

      {characters.map((items, index) => (
        <ul className="Container" key={index}>
          {items.map((dataItem, idx) => (
            <li onClick={calcHandle} key={idx}>
              {dataItem}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Calc  ulator;
