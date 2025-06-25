import { useState } from "react";
import "./Cal.css";

const Calculator = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="container">
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          type="text"
        />
        <ul className="Line" style={{ paddingLeft: "-0px" }}>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
        </ul>
        <ul className="Line" style={{ paddingLeft: "-0px" }}>
          <li>
            <button>5</button>
          </li>
          <li>
            <button>6</button>
          </li>
          <li>
            <button>7</button>
          </li>
          <li>
            <button>8</button>
          </li>
        </ul>
        <ul className="Line" style={{ paddingLeft: "-0px" }}>
          <li>
            <button>9</button>
          </li>
          <li>
            <button>0</button>
          </li>
          <li>
            <button>/</button>
          </li>
          <li>
            <button>*</button>
          </li>
        </ul>
        <ul className="Line" style={{ paddingLeft: "-0px" }}>
          <li>
            <button>+</button>
          </li>
          <li>
            <button>-</button>
          </li>
          <li>
            <button>%</button>
          </li>
          <li>
            <button>=</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
