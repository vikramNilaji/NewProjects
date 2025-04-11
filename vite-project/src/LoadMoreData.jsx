import React, { useEffect } from "react";
import { useState } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const FetchProducts = async () => {
    try {
      setLoading(true)
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data1 = await response.json();
      if(result&&result.products&&result.products.length){
        setProducts(data1.products)
        setLoading(true)
      }

      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return <div className="container">LoadMoreData</div>;
};

export default LoadMoreData;
