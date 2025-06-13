import Search from "./Search";
import { useState, useEffect } from "react";
import "./App.css";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(param) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=84abb64fe78baef3fcb22bcffcd8c51c&units=metric`
      );

      const data = await response.json();
      if (data) {
        console.log(data, "data");
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  function HandleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
      />
      {loading ? (
        <div className="loading"> Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp} &#x2103;</div>
          <p className="discription">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div>
              <div className="column">
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed in your city</p>
              </div>
            </div>

            <div className="humidity">
              <div>
                <div className="column">
                  <p className="wind">{weatherData?.main?.humidity}%</p>
                  <p>Humidity in your city</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
