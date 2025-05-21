import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightdarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  // Apply theme to <body>
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>Hello.. World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightdarkMode;


