import React from "react";
import { useState } from "react";

const Color = () => {
  const [RGB, setRGB] = useState("#11111");
  const [Hex, setHex] = useState("rgb(5,5,5)");
  const [newButton, setNewButton] = useState(true);

  function RandomSelection(length) {
    return Math.floor(Math.random() * length);
  }
  function RandomSelection1() {
    return Math.floor(Math.random() * 256);
  }

  function ChangeRGBColor(RGBColor) {
    setRGB(RGBColor);
    setNewButton(true);
  }

  function ChangeHexColor(HexColor) {
    setHex(HexColor);
    setNewButton(false);
  }

  let ColorCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let a = "#";

  for (let i = 0; i <= 5; i++) {
    a = a + ColorCharacters[RandomSelection(ColorCharacters.length)];
  }

  let b = `rgb(${RandomSelection1()},${RandomSelection1(
    
  )},${RandomSelection1()})`;

  console.log(a);

  return (
    <div>
      {" "}
      <h1 style={{ backgroundColor: newButton ? a : null }}>
        {newButton ? a : null}
      </h1>
      ;
      <h1 style={{ backgroundColor: newButton ? null : b }}>
        {newButton ? null : b}
      </h1>
      <button onClick={() => ChangeRGBColor(b)}>Change RGB Color</button>
      <button onClick={() => ChangeHexColor(a)}>Change Hex Color</button>
    </div>
  );
};

export default Color;
