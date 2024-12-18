import React, { useState } from "react";

const RandomColor = () => {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random(length));
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let randomItems=[]
        for(let i=0;i<5;i++){
            const randomIndex= Math.floor(Math.random()*hex.length)
            
        }
  
  }

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    hex.sort(() => Math.random() - 0.5);
    console.log(hex)

 function getRandomHexItems() {
      let randomItems = [];
      for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * hex.length);
          randomItems.push(hex[randomIndex]);
          
      }
      return ( "#" + randomItems.join(""))
  }
  
  console.log(getRandomHexItems());




  function handleCreateRandomRGBColor() {}

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", background: color }}>
        <button onClick={() => setTypeofColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeofColor("rgb")}>Create RGB color</button>
        <button
          onClick={
            typeofColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRGBColor
          }
        >
          Generate a RandomColor
        </button>

     
      </div>
    </>
  );
};

export default RandomColor;
