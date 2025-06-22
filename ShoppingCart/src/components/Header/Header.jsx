import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide underline">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex  list-none items-center space-x-6 text-gray-800 font-semibold p-5">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/Cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
