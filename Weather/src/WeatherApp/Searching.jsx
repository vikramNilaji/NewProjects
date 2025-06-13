const Searching = ({ search, setSearch, HandleSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <button onClick={HandleSearch}>Search</button>
    </div>
  );
};

export default Searching;
