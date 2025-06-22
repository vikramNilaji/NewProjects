import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-380 mr-10">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
