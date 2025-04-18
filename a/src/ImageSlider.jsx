import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit, page }) => {

  const[loading,setLoading]=useState(false)
  const [errorMsg,setErrorMsg]=useState(null)
  const []

  
  async function FetchData() {
    try {
      
      let response = await fetch(`${url}?limit=${limit}&page=${page}`);
      let datas = await response.json();
      console.log(datas);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    FetchData(url)
  },[])


  return <div></div>;
};

export default ImageSlider;

// <ImageSlider4
// url={"https://picsum.photos/v2/list/"}
// page={"1"}
// limit={"10"}
// />
