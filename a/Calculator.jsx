import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "C", "="];
  const [text, setText] = useState("");

  function EnterText(event) {
    const newValue = event.target.innerHTML;

    if (newValue === "=") {
      try {
        setText(evaluate(text).toString());
      } catch {
        setText("error");
      }
    } else if (newValue === "C") {
      setText("");
    } else {
      setText((prev) => prev + newValue);
    }
  }

  return (
    <div>
      <input type="text" value={text}  />
      {Numbers.map((item, index) => (
        <button onClick={EnterText} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
