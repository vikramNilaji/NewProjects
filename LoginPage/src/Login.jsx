import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function OutputHandle(){
    const op={
        email:email,
        password:password
    }
    console.log("output",op)
  }

  return (
    <div>
    <div>
      <p>Email</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        value={email}
      />
       </div>
       <div>
      <p>Password</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
      /> </div>
      <button onClick={OutputHandle}>Login</button>
    </div>
  );
};

export default Login;
