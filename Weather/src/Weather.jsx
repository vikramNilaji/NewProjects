import Search from "./Search";
import { useState } from "react";

const Weather = () => {
  const [search,setSearch]=useState('')
  return (
    <>
      <Search search={search} setSearch={setSearch}/>
      Weather
    </>
  );
};

export default Weather;
