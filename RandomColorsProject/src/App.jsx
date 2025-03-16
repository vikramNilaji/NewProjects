import { useState } from "react";

const App = () => {
  function RandomColorCode(length) {
    return Math.floor(Math.random() * length);
  }

  function RandomNumber() {
    return Math.floor(Math.random() * 256);
  }

  const [isHex, setIsHex] = useState(true); // Tracks color format (Hex or RGB)
  const [color, setColor] = useState("#000000"); // Default color

  function generateHexColor() {
    let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let HexColor = "#";
    for (let i = 0; i < 6; i++) {
      HexColor += Hex[RandomColorCode(Hex.length)];
    }
    return HexColor;
  }

  function generateRGBColor() {
    return `rgb(${RandomNumber()}, ${RandomNumber()}, ${RandomNumber()})`;
  }

  function HexHandleColor() {
    setIsHex(true); // Select Hex format but don't change the color
  }

  function RGBHandleColor() {
    setIsHex(false); // Select RGB format but don't change the color
  }

  function ChangeColor() {
    if (isHex) {
      setColor(generateHexColor()); // Change color in Hex format
    } else {
      setColor(generateRGBColor()); // Change color in RGB format
    }
  }

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh", textAlign: "center", padding: "20px" }}>
      <button onClick={HexHandleColor}>Hex Color</button>
      <button onClick={RGBHandleColor}>RGB Color</button>
      <button onClick={ChangeColor}>Change Color</button>
      <h1 style={{ color: "white", marginTop: "20px" }}>Color Code: {color}</h1>
    </div>
  );
};

export default App;
