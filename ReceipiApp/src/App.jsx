import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import Details from "./pages/Details"
import Favourites from "./pages/Favourites"

function App() {
  return (
    <div>
      <div className="min-w-screen p-6 bg-white text-gray-600 text-lg ">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favourites" element={<Favourites/>}></Route>
          <Route path="/recipe-item/:id" element={<Details/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
