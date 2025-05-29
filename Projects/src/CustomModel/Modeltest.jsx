import React, { useState } from "react";
import Model from "./Model";
import "./CustomModel.css";

const Modeltest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function HandleToggleModelPopu() {
    setShowModelPopup(!showModelPopup);
  }
  return (
    <div>
      <button onClick={HandleToggleModelPopu}>OpemModelPopup</button>
      {showModelPopup && (
        <Model
          body={<div>Customized body</div>}
          onClose={HandleToggleModelPopu}
        />
      )}
    </div>
  );
};

export default Modeltest ;
