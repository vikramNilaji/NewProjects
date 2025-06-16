import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context";

const NavBar = () => {
  const { searchParam, setSearchParam,HandleSubmit} = useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row lg:gap-0 ">
      <h2 className="text-2xl font-semibold">Food Recipe</h2>

      <NavLink to="/" className="text-black hover:text-gray-700 duration-300">
        Food Recipe
      </NavLink>

      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items"
          onChange={(event) => setSearchParam(event.target.value)}
          className="bg-white/75 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink to="/" className="text-black hover:text-gray-700 duration-300"></NavLink>
        </li>
        <li>
          <NavLink to="/favourites" className="text-black hover:text-gray-700 duration-300"></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

