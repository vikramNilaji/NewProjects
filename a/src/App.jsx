import { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <div key={index} className="StarColor">
            {" "}
            <FaStar> </FaStar>
          </div>
        );
      })}
    </>
  );
}

export default App;
