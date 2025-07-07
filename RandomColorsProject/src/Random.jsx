import React from "react";
import { useState } from "react";
import "./Random.css"

const Random = () => {
  const [HexColor, setHexColor] = useState("#ffffa");
  const [HexColor1, setHexColor1] = useState("#ffffa");
  const [RGB, setRGB] = useState(`rgba(218, 36, 36, 0.87)`);
  const [newColorFormat, setNewColorFormat] = useState(true);

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
    <div className="container">
      <p className="Color" style={{backgroundColor: newColorFormat? HexColor:RGB}}>{newColorFormat ? HexColor : RGB}</p>
      <div className="ButtonContainer">
      <button className="Hex buttons" onClick={ColorFormat} style={{ backgroundColor: newColorFormat ? "red" : null }}> Hex </button>
      <button className="RGB buttons" onClick={ColorFormat} style={{ backgroundColor: newColorFormat ? null : "red" }}>RGB</button>
      <button className="ChangeColor buttons" onClick={newColorFormat? HexC : RGBC }>Change Color</button>
      </div> 
    
    </div>
  );
};

export default Random;
