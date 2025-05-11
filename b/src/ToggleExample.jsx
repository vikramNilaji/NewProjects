import React, { useState } from "react";

function ToggleExample() {
  const [status, setStatus] = useState({});

  const toggleStatus = (name) => {
    setStatus({
      ...status,
      [name]: !status[name], // key is dynamic
    });
  };

  return (
    <div>
      <button onClick={() => toggleStatus("apple")}>Toggle Apple</button>
      <button onClick={() => toggleStatus("banana")}>Toggle Banana</button>
      <button onClick={() => toggleStatus("mango")}>Toggle Mango</button>

      <p>Apple is {status.apple ? "ON" : "OFF"}</p>
      <p>Banana is {status.banana ? "ON" : "OFF"}</p>
      <p>Mango is {status.mango ? "ON" : "OFF"}</p>
    </div>
  );
}

export default ToggleExample;
