import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context";

const NavBar = () => {
  const { searchParam, setSearchParam,HandleSubmit} = useContext(GlobalContext);
  console.log(searchParam);

  return (
   <nav className="py-8 bg-white shadow">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 px-4">
    {/* Brand */}
    <NavLink to="/" className="text-black hover:text-gray-700 text-2xl font-semibold">
      Food Recipe
    </NavLink>

    {/* Search */}
    <form onSubmit={HandleSubmit} className="my-2 lg:my-0">
      <input
        type="text"
        name="search"
        placeholder="Enter Items"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        className="bg-white/75 px-8 py-2 rounded-full outline-none lg:w-96 shadow"
      />
    </form>

    {/* Navigation Links */}
    <ul className="flex gap-5">
      <li>
        <NavLink to="/" className="text-black hover:text-gray-700">Home</NavLink>
      </li>
      <li>
        <NavLink to="/favourites" className="text-black hover:text-gray-700">Favourites</NavLink>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;

