import { useEffect, useState } from "react";

const CustomScroll = ({ url }) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function FetchData( getUrl ) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      setLoading(false)
      console.log("Error Message");
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    FetchData(url);
  }, [url]);
   return (
    <>
      
    </>
  );
};

export default CustomScroll;
