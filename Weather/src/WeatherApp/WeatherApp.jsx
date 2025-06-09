import Searching from "./Searching";
import { useEffect, useState } from "react";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");

  async function FetchData(param) {
    try {
      setLoading(true);
      const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=84abb64fe78baef3fcb22bcffcd8c51c
`);
      const jsondata = await response.json();
      if (jsondata) {
        setLoading(true);
        setData(jsondata);
        console.log(jsondata);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function HandleSearch() {
    FetchData(search);
  }

  useEffect(() => {
    FetchData("banglore");
  }, []);

  return (
    <div>
      <Searching
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
      />
    </div>
  );
};

export default WeatherApp;
