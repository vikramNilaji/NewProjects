import React from "react";
import "./App.css"

const Search = ({ search, setSearch,HandleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter Cuty name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={HandleSearch} className="search-btn" >
        Search
      </button>
    </div>
  );
};

export default Search;
