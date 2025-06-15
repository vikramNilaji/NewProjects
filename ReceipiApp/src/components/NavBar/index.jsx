import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row lg:gap-0 ">
      <h2 className="text-2xl  font-semibold"> Food Recipe</h2>
    
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
           Food Recipe
          </NavLink>
      
      <form>
        <input
          type="text"
          name="search"
          placeholder='"Enter Items'
          className="bg-white/75 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
        ></input>
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            {" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            {" "}
          </NavLink>  
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
