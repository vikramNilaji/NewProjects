import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

import NewStarRating from "./NewStarRating.jsx";

import StarRating from "./StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <NewStarRating /> <StarRating />{" "}
  </StrictMode>
);
