import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TryCatch from "./TryCatch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <TryCatch />
  </StrictMode>
);
