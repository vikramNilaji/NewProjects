import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#111111");
  const [isHex, setIsHex] = useState(true);

  
  function RandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function RandomRgbColor() {
    return Math.floor(Math.random() * 256);
  }
  function HexButton() {
    setIsHex(true);
  }

  function RGBButton() {
    setIsHex(false);
  }

  function ColorFormatButton() {
    if (isHex) {
      setColor(hexColor);
    } else {
      setColor(RgbColor);
    }
  }
  
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    hexColor = hexColor + hex[RandomColor(hex.length)];
  }

  let RgbColor = `rgb(${RandomRgbColor()},${RandomRgbColor()},${RandomRgbColor()})`;

  return (
    <>
      <button onClick={ColorFormatButton}>ChangeColorFormat</button>{" "}
      <button onClick={HexButton}> HexColor</button>
      <button onClick={RGBButton}>RGBColor</button>
      <h1 style={{ backgroundColor: color }}> {color}</h1>
    </>
  );
}


// import { useState } from "react";

// const App = () => {
//   function RandomNumberSelector(length) {
//     return Math.floor(Math.random() * length);
//   }

//   function RandomRGBColor() {
//     return Math.floor(Math.random() * 256);
//   }

//   let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//   let HexColor = "#";
//   let RGBColor = `rgb(${RandomRGBColor()},${RandomRGBColor()},${RandomRGBColor()})`;

//   for (let i = 0; i <= 5; i++) {
//     HexColor = HexColor + Hex[RandomNumberSelector(Hex.length)];
//   }

//   const [color, setColor] = useState("#00000");
//   const [isHex, setIsHex] = useState(true);
//   function HexColorButton() {
//     setIsHex(true);
//   }
//   function RGBColorButton() {
//     setIsHex(false);
//   }

//   function ChangeColorButton() {
//     if (isHex) {
//       setColor(HexColor);
//     } else {
//       setColor(RGBColor);
//     }
//   }

//   return (
//     <>
//       <button onClick={HexColorButton}>Hex Color</button>
//       <button onClick={RGBColorButton}>RGB Color</button>
//       <button onClick={ChangeColorButton}>Change Color</button>
//       <div
//         style={{
//           backgroundColor: color,
//           height: "8rem",
//           width: "22.5rem",
//           border: "2px solid white",
//         }}
//       >
//         {color}
//       </div>
//     </>
//   );
// };

// export default App;
