import React, { useState } from 'react'
import { useState } from 'react';

const preventDefault = () => {
//  function handleSubmit(e) {
//     e.preventDefault(); // stops the page from refreshing
//     alert("Form submitted... but without refreshing the page!");
//   }

  const[text,setText]=useState("")
  const [textValue,setTextValue]=useState(text)
  function TextHandle(a){
    setTextValue(a)
  }

  return (
    <form>
      <input onChange={(e)=>setText(e.target.value)} type="text" value={text} placeholder="Enter your name" />
      <button type="submit" onClick={TextHandle(text)}>Submit</button>
      <p>{textValue}</p>
    </form>
  );
};

export default preventDefault;
