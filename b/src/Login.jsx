import React, { useState } from "react"; 
import LocalStorage from "./LocalStorage";

const Login = () => {

    const[value,setValue]=useState("")
    const[user,setUser]= LocalStorage()
    

    function HandleClick(){
       setUser(value)

    }
  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={HandleClick}>Login</button>

    </div>
  );
};

export default Login;
