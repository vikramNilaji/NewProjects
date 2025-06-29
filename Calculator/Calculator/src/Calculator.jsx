import { useState } from "react";
import "./Cal.css";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [text, setText] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const Numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, "/", "*"],
    ["-", "+", "=", "."],
    ["C", "", "", ""],
  ];

  function HandleClick(event) {
    const char = event.target.innerText;

    if (char === "=") {
      try {
        setText(evaluate(text).toString());
      } catch {
        setText("Error");
      }
      setEvaluated(true);
    } else if (char == "C") {
      setText("");
    } else {
      if (evaluated) {
        setText(char);
      } else {
        setText((prev) => prev + char);
      }

      setEvaluated(false);
    }
  }

  return (
    <div className="container">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      {Numbers.map((row, rowIndex) => (
        <ul key={rowIndex} className="Line">
          {row.map((item, colIndex) => (
            <li key={colIndex} className="items" onClick={HandleClick}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Calculator;
