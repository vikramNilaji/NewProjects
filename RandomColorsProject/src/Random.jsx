import React from "react";
import { useState } from "react";

const Random = () => {
  const [HexColor, setHexColor] = useState("#ffffa");
  const [HexColor1, setHexColor1] = useState("#ffffa");
  const [RGB, setRGB] = useState(`rgba(218, 36, 36, 0.87)`);
  const [newColorFormat, setNewColorFormat] = useState(true);
  const [colors, setColors] = useState(true);

  function RandomNumbers(length) {
    return Math.floor(Math.random() * length);
  }
  function RandomRGB() {
    return Math.floor(Math.random() * 255);
  }
  function RandomRGBa() {
    return Math.random();
  }

  function ColorFormat() {
    setNewColorFormat(!newColorFormat);
  }

  function HexC() {
    let HexColor = "#";
    let HexColor1 = "#";
    let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i <= 5; i++) {
      HexColor = HexColor + Hex[RandomNumbers(Hex.length)];
      HexColor1 = HexColor1 + Hex[RandomNumbers(Hex.length)];
    }
    setHexColor(HexColor);
    setHexColor1(HexColor1);
  }

  function RGBC() {
    let RGB = `rgba( ${RandomRGB()}, ${RandomRGB()} , ${RandomRGB()} , ${RandomRGBa()})`;
    console.log(RGB);
    setRGB(RGB);
  }

  return (
    <div>
      <p>{newColorFormat ? HexColor : RGB}</p>
      <button
        onClick={HexC}
        style={{ backgroundColor: newColorFormat ? "red" : null }}
      >
        Hex Color
      </button>
      <button
        onClick={RGBC}
        style={{ backgroundColor: newColorFormat ? null : "red" }}
      >
        RGB Color
      </button>
      <button onClick={ColorFormat}>Change Format</button>
    </div>
  );
};

export default Random;
