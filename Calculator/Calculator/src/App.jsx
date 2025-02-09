import { useState } from "react";
import { evaluate } from "mathjs"; // Importing math.js safely

const NewCalculator = () => {
  const [expression, setExpression] = useState("");

  function handleInput(event) {
    const value = event.target.textContent;

    if (value === "=") {
      try {
        setExpression(evaluate(expression).toString()); // Using math.js safely
      } catch {
        setExpression("Error");
      }
    } else if (value === "C") {
      setExpression("");
    } else {
      setExpression((prev) => prev + value);
    }
  }

  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "*", "/", "-", "+", "=", "C", "."];

  function handleOnChange(e) {
    setExpression(e.target.value);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        value={expression}
        onChange={handleOnChange}
        style={{
          width: "200px",
          height: "40px",
          fontSize: "20px",
          textAlign: "right",
          marginBottom: "10px",
        }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px", justifyContent: "center" }}>
        {Numbers.map((num, index) => (
          <button
            key={index}
            onClick={handleInput}
            style={{
              width: "50px",
              height: "50px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewCalculator;

