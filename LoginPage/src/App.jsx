import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [newText, setNewText] = useState(name);
  const [newPass, setNewPass] = useState(newPassword);

  function HandleLogin() {
    setName("vikram");
    setNewPassword("v2020");
  }

  function UserChange(e) {
    setNewText(e.target.value);
  }

  function PassChange(ev) {
    setNewPass(ev.target.value);
  }

  return (
    <>
      <div>
        <div>
          <label>UserName</label>

          <input onChange={UserChange} value={newText} type="text" />
        </div>
        <div>
          <label>Password</label>
          <input onChange={PassChange} value={newPass} type="password" />
        </div>

        <div>
          <button onClick={HandleLogin}> Login</button>
        </div>
      </div>
      <div>
        {name === "vikram" && newPassword === "v2020" ? "Login" : "NoLogin"}
      </div>
    </>
  );
}

export default App;
