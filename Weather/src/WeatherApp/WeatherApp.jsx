import { useEffect, useState } from "react";
import Searching from "./Searching";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  async function FetchData(param) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=84abb64fe78baef3fcb22bcffcd8c51c&units=metric`
      );
      const JsonData = await response.json();
      setWeatherData(JsonData);

      if (JsonData) {
        console.log(JsonData);
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  function HandleSearch() {
    FetchData(search); // log only when user searches
  }

  useEffect(() => {
    FetchData("Bangalore"); // no logging here
  }, []);

  return (
    <div>
      <Searching
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
      />

      {loading ? (
        <h2> Loading ... pLease wait</h2>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
              {weatherData?.main?.temp},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
