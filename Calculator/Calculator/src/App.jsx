import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); 
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("0"); 
    } else {
      setInput((prev) =>
        prev === "0" || prev === "Error" ? value : prev + value
      );
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
