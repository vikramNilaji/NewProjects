import React, { useState } from 'react'
import Model from './Model'

const Modeltest = () => {
  const[showModelPopup,setShowModelPopup]=useState(false)
  
  function HandleToggleModelPopu(){
    setShowModelPopup(!showModelPopup)
  }
  return (
    <div>
      <button onClick={HandleToggleModelPopu}>OpemModelPopup</button>
      {
        showModelPopup && <Model/>
      }
    </div>
  )
}

export default Modeltest
