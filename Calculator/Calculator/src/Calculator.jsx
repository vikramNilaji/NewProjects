import { useState } from "react";
import "./Cal.css";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [text, setText] = useState("");
  const [evaluated,setEvaluated]=useState(true)
  const Numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, "/", "*"],
    ["-", "+", "=", "."],
  ];

  function HandleClick(values) {
    const Char = values.target.innerText;
    if (Char === "=") {
      setText(evaluate(text).toString());
      setEvaluated(true)
    } else {
      setText((prev) => prev + Char);
      setEvaluated(false)
    }
  }

  return (
    <div>
      <div className="container">
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
        />
        {Numbers.map((items, index) => {
          return (
            <ul className="Line" key={index}>
              {items.map((subitems, index) => {
                return (
                  <li onClick={HandleClick} className="items" key={index}>
                    {subitems}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
