import React, { useState } from "react";
import { evaluate } from "mathjs";
const Calculator = () => {
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "C", "="];
  const [text, setText] = useState("");
  const [evaluated, setEvaluated] = useState(true);

  function EnterText(event) {
    const newValue = event.target.innerHTML;

    if (newValue === "=") {
      try {
        setText(evaluate(text).toString());
        setEvaluated(false);
      } catch {
        setText("error");
        setEvaluated(true);
      }
    } else if (newValue === "C") {
      setText("");
    } else {
      if (evaluated === false) {
        setText(newValue);
      } else {
        setText((prev) => prev + newValue);
        setEvaluated(true);
      }
    }
  }

  return (
    <div>
      <input type="text" value={text} />
      {Numbers.map((item, index) => (
        <button onClick={EnterText} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
