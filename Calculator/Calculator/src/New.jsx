import React from "react";
import { useState, useEffect } from "react";

const New = () => {
  const [count, setCount] = useState(1);
  const [a, setA] = useState([]);
  function AddNumbers() {
    setCount(count + 1);
    setA([...a, count]);
  }

  console.log(a);
  return (
    <div>
      <button onClick={AddNumbers}> Add</button>
      <p>{count}</p>
      <h1>a={JSON.stringify(a)}</h1>
    </div>
  );
};

export default New;
