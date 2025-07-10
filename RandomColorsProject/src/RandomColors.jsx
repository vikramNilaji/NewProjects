import React from "react";
import { useState } from "react";

const RandomColors = () => {


  const [color, setColor] = useState("#ffffff")
  const [value,setValue]=useState(true)

  function RandomHexNumber(length) {
    return Math.floor(Math.random() * length)
  }
  function RandomRGBNumber(){
    return Math.floor(Math.random()*255)
  }
  function HexColor() {
    setValue(true)
   

    let Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let HexNumber = "#";
    for (let i = 0; i < 6; i++) {
      HexNumber = HexNumber + Hex[RandomHexNumber(Hex.length)]
    }
    return HexNumber
    
  }
  function RGBColor(){
    setValue(false)
    
    let a = `rgb(${RandomRGBNumber()},${RandomRGBNumber()},${RandomRGBNumber()})`
    return a

  }


 function ColorChanger() {
  if(value){
    setColor(HexColor())
  }
 else{
  setColor(RGBColor())
 }
 }
 
  return (
    <div>
      <div  style={{ border: "2px solid black", height: "100px", width: "100px", backgroundColor: color }}>
        {color}
      </div>

      <button onClick={ value? RGBColor:HexColor} style={{ border: "2px solid black" }}> {value?  'set RGB Format' : 'set Hex Format' }</button>
      {/* <button onClick={HexColor} style={{ border: "2px solid black" }} ></button> */}
      <button onClick={ColorChanger} style={{ border: "2px solid black" }}>Change Color ( { value? "showing Hex colors" : " showing RGB Colors"}) </button>

    </div>
  );
};

export default RandomColors;
