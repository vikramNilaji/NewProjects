import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./Context"; // adjust the path if needed

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>
);
