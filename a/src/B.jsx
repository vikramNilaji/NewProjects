import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const B = () => {
  const [enterInput, setEnterInput] = useState("");
  const [inputValue, setInputValue] = useState("");

  function InputButton(e) {
    setEnterInput(e.target.value);
  }

  function InputValueButton() {
    setInputValue(enterInput);
  }

  useEffect(() => {
    if (inputValue !== "") {
      console.log("Input is rendered");
    }
  }, [inputValue]);

  return (
    <div>
      <input value={enterInput} onChange={InputButton} type="text" />
      <button onClick={InputValueButton}> Click Here</button>
      <p>{inputValue}</p>
    </div>
  );
};

export default B;
