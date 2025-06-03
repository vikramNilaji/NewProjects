import React from "react";
import "./App.css"

const Search = ({ search, setSearch }) => {
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
      <button className="search-btn" >
        Search
      </button>
    </div>
  );
};

export default Search;
