import Search from "./Search";
import { useState,useEffect } from "react";

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
    fetchWeatherData(search );
  } 

  useEffect(()=>{
    fetchWeatherData("banglore")
  },[])


  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
      />
      Weather
    </>
  );
};

export default Weather;
