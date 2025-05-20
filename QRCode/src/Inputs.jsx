import React from 'react'

const Inputs = () => {

  const[newValue,setNewValue]=useState("")


  function HandleInput(e){
    setNewValue(e.target.value)


  }
  return (
    <div>

    <input onChange={HandleInput} value={newValue} type="text"/>

      
    </div>
  )
}

export default Inputs
