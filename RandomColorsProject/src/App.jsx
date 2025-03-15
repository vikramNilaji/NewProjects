import { useState } from "react";
import "./App.css";

function App() {
  function RandomColorCode(length) {
    return Math.floor(Math.random() * length);
  }

  // }
  let num = [3000, 5, 2, 3491, 342, 900023, 232, 232, 3000, 2, 5];
  let a = 3000;
  let b = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === a) {
      console.log(num[i]);
      b.push(num[i]);
      console.log(b);
      console.log(b.length);
    }
  }

  return <></>;
}

export default App;
