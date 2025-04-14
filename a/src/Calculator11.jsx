import React from 'react'
import './Cal.css'
import { useState } from 'react'

const Calculator11 = () => {
  const[text,setText]=useState("")
   
  function ChangeHandler(e){
    setText(e.target.value)
  }

  let Letters=[[1,2,3,4],[5,6,7,8],[9,0,'+','-'],['*','/','C','=']]

  return (
    <div className='Box'>
    <input type="text" value={text} onChange={ChangeHandler}/>

     {Letters.map((items)=>{return(<div>{items.map((semiItems)=>{return(<div>{semiItems}</div>)})}</div>)})}


      
    </div>
  )
}

export default Calculator11
