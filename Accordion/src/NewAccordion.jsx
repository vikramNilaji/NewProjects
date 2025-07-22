import React from 'react'
import Data from "./Data.js"

const NewAccordion = () => {
  return (
    <div> {Data.map((items, index) => { return (<div>{items}</div>) })}  </div>
  )
}

export default NewAccordion