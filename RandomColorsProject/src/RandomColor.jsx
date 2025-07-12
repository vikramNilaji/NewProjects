import React from "react";
import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#ffffff");

  function RandomNumberForHexGenerator(length) {
    return Math.floor(Math.random() * length);
  }
  function RandomNumberForRGBGenerator() {
    return Math.floor(Math.random() * 255);
  }
  function HexColor() {
 
    let HexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let Hex = "#";
    for (let i = 0; i < 6; i++) {
      Hex = Hex + HexColor[RandomNumberForHexGenerator(HexColor.length)];
    }
    return Hex;
  }
  function RGBColor() {
     let rgb = `rgb(${RandomNumberForRGBGenerator()},${RandomNumberForRGBGenerator()},${RandomNumberForRGBGenerator()})`;
    return rgb;
  }
  function ColorFormatChanger() {
    if (buttons) {
      setColor(RGBColor());
    } else {
      setColor(HexColor());
    }
  }

  const [buttons, setButtons] = useState(true);

  function ButtonChanger() {
    setButtons(!buttons);
    }

  return (
    <div>
      <div> {color} </div>
      <button onClick={ButtonChanger}>
        {buttons ? "Hex" : "RGB"}{" "}
      </button>

      <button onClick={ColorFormatChanger}>Change Format</button>
    </div>
  );
};

export default RandomColor;
