import React, { useState } from "react";

function ToggleExample() {
  const [status, setStatus] = useState({
    apple: false,
    banana: false,
    orange: false,
  });

  function toggleFruit(name) {
    setStatus({
      ...status,
      [name]: !status[name],
    });
  }

  return (
    <div>
      <h2>Click to select/deselect fruits</h2>
      {Object.keys(status).map((fruit) => (
        <div key={fruit}>
          <button onClick={() => toggleFruit(fruit)}>
            {fruit} - {status[fruit] ? "✅ Selected" : "❌ Not Selected"}
          </button>
        </div>
      ))}

      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

// function ToggleExample() {
//   const [status, setStatus] = useState({});

//   const toggleStatus = (name) => {
//     setStatus({
    
//       [name]: !status[name], // key is dynamic
//     });
//   };

//   return (
//     <div>
//       <button onClick={() => toggleStatus("apple")}>Toggle Apple</button>
//       <button onClick={() => toggleStatus("banana")}>Toggle Banana</button>
//       <button onClick={() => toggleStatus("mango")}>Toggle Mango</button>

//       <p>Apple is {status.apple ? "ON" : "OFF"}</p>
//       <p>Banana is {status.banana ? "ON" : "OFF"}</p>
//       <p>Mango is {status.mango ? "ON" : "OFF"}</p>
//     </div>
//   );
// }

export default ToggleExample;
