import { useState } from "react";
import "./App.css";

function App() {
  function RandomColorCode(length) {
    return Math.floor(Math.random() * length);
  }

  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i <= 5; i++) {
    hexColor = hexColor + hex[RandomColorCode(hex.length)];
  }
  console.log(hexColor)

  return <></>;
}

export default App;
