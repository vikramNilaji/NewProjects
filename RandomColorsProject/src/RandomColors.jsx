import React from "react";
import { useState } from "react";

const RandomColors = () => {


  const [color, setColor] = useState("#ffffff")
  function RandomHexNumber(length) {
    return Math.floor(Math.random() * length)
  }
  function HexColor() {

    let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let HexNumber = "#";
    for (let i = 0; i < 6; i++) {
      HexNumber = HexNumber + Hex[RandomHexNumber(Hex.length)]
    }
    return HexNumber
  }

  function ColorChanger() {
    setColor(HexColor())
  }

  return (
    <div>
      <div style={{ border: "2px solid black", height: "100px", width: "100px" }}>
        {color}
      </div>

      <button style={{ border: "2px solid black" }}>RGB Format</button>
      <button onClick={ColorChanger} style={{ border: "2px solid black" }} >Hex Format</button>
      <button style={{ border: "2px solid black" }}>Change Color </button>

    </div>
  );
};

export default RandomColors;
