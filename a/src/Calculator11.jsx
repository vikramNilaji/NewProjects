import React from "react";
import "./Cal.css";
import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator11 = () => {
  const [text, setText] = useState("");

  function ChangeHandler(NumItems) {
    if (NumItems === "=") {
      setText(evaluate(text));
    } else if (NumItems === "C") {
      setText("");
    } else {
      setText((prevValue) => prevValue + NumItems);
    }
  }

  //  function TextHandler(e){

  //     setText(e.target.value)
  //   }

  let Letters = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, "+", "-"],
    ["*", "/", "C", "="],
  ];

  return (
    <div className="Box">
      <input type="text" value={text} />

      {Letters.map((items, index) => {
        return (
          <div key={index} className="NumContainer">
            {items.map((semiItems, index1) => {
              return (
                <div
                  key={index1}
                  className="Numbers"
                  onClick={() => ChangeHandler(semiItems)}
                >
                  {semiItems}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calculator11;
