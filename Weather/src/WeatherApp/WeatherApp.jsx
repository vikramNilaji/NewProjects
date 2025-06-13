import { useEffect } from "react";
import Searching from "./Searching";
import { useState } from "react";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  async function FetchData(search) {
    try {
      setLoading(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=84abb64fe78baef3fcb22bcffcd8c51c`
      );
      const JsonData = response.json();
      setWeatherData(JsonData);
      console.log(JsonData);
    } catch (error) {
      console.log(error.message);
    }
  }

  function HandleSearch() {
    FetchData(search);
  }

  useEffect(() => {
    FetchData("Banglore");
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
