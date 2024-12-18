import { useState } from "react";

const RandomHexNumber = () => {
  const [color, setColor] = useState('#ffffff'); 

  function HexColorChangeButton() {
    const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let RandomHexNumber = ["#"]; 
    
    for (let i = 0; i < 6; i++) {
      const RandomIndex = Math.floor(Math.random() * Hex.length);
      RandomHexNumber.push(Hex[RandomIndex]);
    }
    
    setColor(RandomHexNumber.join(""));
  }

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={HexColorChangeButton}>Change Hex Color</button>
    </div>
  );
};

export default RandomHexNumber;

