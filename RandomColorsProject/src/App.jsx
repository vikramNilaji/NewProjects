// import { useState } from "react";

// const App = () => {
//   function RandomColorCode(length) {
//     return Math.floor(Math.random() * length);
//   }

//   function RandomNumber() {
//     return Math.floor(Math.random() * 256);
//   }

//   const [isHex, setIsHex] = useState(true); // Tracks color format (Hex or RGB)
//   const [color, setColor] = useState("#000000"); // Default color

//   function generateHexColor() {
//     let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     let HexColor = "#";
//     for (let i = 0; i < 6; i++) {
//       HexColor += Hex[RandomColorCode(Hex.length)];
//     }
//     return HexColor;
//   }

//   function generateRGBColor() {
//     return `rgb(${RandomNumber()}, ${RandomNumber()}, ${RandomNumber()})`;
//   }

//   function HexHandleColor() {
//     setIsHex(true);
//   }

//   function RGBHandleColor() {
//     setIsHex(false);
//   }

//   function ChangeColor() {
//     if (isHex) {
//       setColor(generateHexColor());
//     } else {
//       setColor(generateRGBColor());
//     }
//   }

//   return (
//     <div style={{ backgroundColor: color, minHeight: "100vh", textAlign: "center", padding: "20px" }}>
//       <button onClick={HexHandleColor}>Hex Color</button>
//       <button onClick={RGBHandleColor}>RGB Color</button>
//       <button onClick={ChangeColor}>Change Color</button>
//       <h1 style={{ color: "white", marginTop: "20px" }}>Color Code: {color}</h1>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  function RandomNumberSelector(length) {
    return Math.floor(Math.random() * length);
  }

  function RandomRGBColor() {
    return Math.floor(Math.random() * 256);
  }

  let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let HexColor = "#";
  let RGBColor = `rgb(${RandomRGBColor()},${RandomRGBColor()},${RandomRGBColor()})`;

  for (let i = 0; i <= 5; i++) {
    HexColor = HexColor + Hex[RandomNumberSelector(Hex.length)];
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
      setColor(HexColor);
    } else {
      setColor(RGBColor);
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
