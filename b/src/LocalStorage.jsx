import React, { useState } from "react";

const LocalStorage = () => {

const[user,setUserValue]=useState(()=> getUser())
  function setUser(value) {
    localStorage.setItem("user", value);
  }
  function getUser() {
    const user = localStorage.getItem("user");
    return user;
  }

  return [user,setUser]
};
 
export default LocalStorage;
 