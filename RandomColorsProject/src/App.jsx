import { useState } from "react";

const App = () => {
  function RandomNumberSelector(length) {
    return Math.floor(Math.random() * length);
  }
  function RandomRGBColor() {
    return Math.floor(Math.random() * 256);
  }
  function HexC() {
    let HexColor = "#";
    let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i <= 5; i++) {
      HexColor = HexColor + Hex[RandomNumberSelector(Hex.length)];
    }
    return HexColor;
  }
  function RgbC() {
    let RGBColor = `rgb(${RandomRGBColor()},${RandomRGBColor()},${RandomRGBColor()})`;
    return RGBColor;
  }
  const [color, setColor] = useState("#00000");
  const [isHex, setIsHex] = useState(true);
  function HexColorButton() {
    setIsHex(true);
  }
  function RGBColorButton() {
    setIsHex(false);
  }

  function ChangeColorButton() {
    if (isHex) {
      setColor(HexC());
    } else {
      setColor(RgbC());
    }
  }

  return (
    <>
      <button onClick={HexColorButton}>Hex Color</button>
      <button onClick={RGBColorButton}>RGB Color</button>
      <button onClick={ChangeColorButton}>Change Color</button>
      <div
        style={{
          backgroundColor: color,
          height: "8rem",
          width: "22.5rem",
          border: "2px solid white",
        }}
      >
        {color}
      </div>
    </>
  );
};

export default App;
