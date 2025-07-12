import React from "react";
import "./Random.css";
import { useState } from "react";

const Random = () => {
  const [color, setColor] = useState("#fffff");
  // const [value, setValue] = useState(true);
  const [ColorButton, setColorButton] = useState(true);

  function ButtonChanger() {
    setColorButton(!ColorButton);
  }
  function HandleRandomHexNumbers(length) {
    return Math.floor(Math.random() * length);
  }

  function HandleRGBNumber() {
    return Math.floor(Math.random() * 255);
  }
  function RandomHexNumbers() {
    let HexNumbers = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let Hex = "#";
    for (let i = 0; i < 6; i++) {
      Hex = Hex + HexNumbers[HandleRandomHexNumbers(HexNumbers.length)];
      console.log(Hex);
    }

    return Hex;
  }

  function RandomRGBColor() {
    let a = `rgb( ${HandleRGBNumber()},${HandleRGBNumber()},${HandleRGBNumber()})`;

    return a;
  }

  // function HexButton() {
  //   setValue(true);
  // }

  // function RGBButton() {
  //   setValue(false);
  // }

  function ChangeFormat() {
    if (ColorButton) {
      setColor(RandomHexNumbers());
    } else {
      setColor(RandomRGBColor());
    }
  }

  return (
    <div className="container">
      <div
        className="Color"
        style={{ backgroundColor: color, borderColor: "#abcdef" }}
      >
        {color}
      </div>
      <div className="ButtonContainer">
        <button className="buttons" onClick={ButtonChanger}>
          {ColorButton ?  " RGB Color Format" : "Hex Color Format"}
        </button>

        <button className="buttons" onClick={ChangeFormat}>
          Change Color
        </button>
      </div>
    </div>
  );
};

export default Random;
