import { useState } from "react";
import "./App.css";

const App = () => {
  let Numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, "+", "-"],
    ["X", "/", "%", "="]
  ];

  return (
    <>
      
      <h1 className="Content">
      <div className="Input"><input type="text" /></div>
        {Numbers.map((Elements, index) => (
          <ul key={index}>
            {Elements.map((Indices, index2) => (
              <li>{Indices}</li>
            ))}
          </ul>
        ))}
      </h1>
    </>
  );
};

export default App;
