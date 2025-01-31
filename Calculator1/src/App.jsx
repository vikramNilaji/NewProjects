import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let Numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, "+", "-"],
    ["x", "/", "=", "C"],
  ];

  return (
    <>
      {Numbers.map((Num, rowIndex) => (
        <ul key={rowIndex}>
          {Num.map((num, colIndex) => (
            <li key={colIndex}>{num}</li>
          ))}
        </ul>
      ))}
    </>
  );
}

export default App;
