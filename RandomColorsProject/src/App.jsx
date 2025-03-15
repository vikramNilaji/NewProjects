import { useState } from 'react'
import './App.css'

function App() {
   
  function RandomColorCode(length){
    return Math.floor(Math.random()*length)
  }


 
  let HexColor=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  let Hex= "#"
  for(let i=0;i<4;i++){
   Hex = Hex + HexColor[RandomColorCode(HexColor.length)]
   }

   console.log(Hex)

  
  return (
    <>
        
    </>
  )
}

export default App
