import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let Numbers = [
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "x"],
    [0, ".", "=", "/"],
  ];

  return (
    // <>
    //   {Numbers.map((Num, rowIndex) => (
    //     <ul key={rowIndex}>
    //       {Num.map((num, colIndex) => (
    //         <li key={colIndex}>{num}</li>
    //       ))}
    //     </ul>
    //   ))}
    // </>

    <>
    <div className="Input"><input type="text"/></div>
    <div className="Main">
      {Numbers.map((Number1, index1) => (
        <div key={index1} className="Content">
          <ul>            
            {Number1.map((Number2, index2) => (
              <li key={index2}>{Number2}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
