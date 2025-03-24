import React, { useState } from "react";
import { useEffect } from "react";

const A = () => {

  const[count,setCount]=useState(0)
  const[name,setName]=useState('vikram')

  function ChangeSet(){
    setCount(count+1)
    setName("Pooja")
  }
  useEffect(() => {
    console.log(`${name} Welcome to useEffect world  ${count}`);
  }, [count,name]);


  return (
    <div>
           <button onClick={ChangeSet}> Click</button>
           {console.log(' Good Morning ')}
    </div>
  );
};

export default A;
