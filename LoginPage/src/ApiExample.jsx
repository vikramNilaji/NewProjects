import React from "react";
import { useState } from "react";

const ApiExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);

  async function HandleSubmit(e) {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
    };

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h2>Add New User</h2>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enteer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>

      {response && ( 
        <div>
          <h4> Server Response:</h4>
          <pre>{JSON.stringify(response,null,2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiExample;
