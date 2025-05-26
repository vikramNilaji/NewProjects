import React, { useEffect, useState } from "react";
import "./App.css";

const CustomScroll = ({ url }) => {
  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function HandleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.scrollTop,
      document.documentElement.clientHeight
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  async function FetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const jsonData = await response.json();

      if (jsonData) {
        setLoading(false);
        console.log(jsonData);
        setData(jsonData);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    FetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", HandleScrollPercentage);
    return () => window.removeEventListener("scroll", HandleScrollPercentage);
  }, []);

  console.log(data, scrollPercentage);

  if (Loading) {
    return <div>Loading... Please wait</div>;
  }

  if (ErrorMessage) {
    return <div>Error Occurrd :{ErrorMessage}</div>;
  }

  return (
    <div>
      <div className="top-container">
        <div>Custom Scroll Indicator</div>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {data && data.products && data.products.length ? (
        data.products.map((item, index) => <div key={index}>{item.title}</div>)
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default CustomScroll;
