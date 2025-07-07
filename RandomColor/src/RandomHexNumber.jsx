import { useState } from "react";

const RandomHexNumber = () => {
  const [color, setColor] = useState("#ffffff");
  const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  Hex.sort(() => Math.random() - 0.5);
  const RandomItems = ["#"];
  console.log(Hex);
  function HandleColorButton() {
    for (let i = 0; i < 6; i++) {
      const RandomIndex = Math.floor(Math.random() * Hex.length);
      RandomItems.push(Hex[RandomIndex]);
      setColor(RandomItems.join(""));
    }
  }
  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
      <button onClick={HandleColorButton}>ChangeColor</button>
    </div>
  );
};

export default RandomHexNumber;
