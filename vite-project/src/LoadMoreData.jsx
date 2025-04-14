import React, { useState, useEffect } from "react";
import "./App.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  async function FetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
        setCount((prev) => prev + 1); // increment page count
      }
      setLoading(false);

      console.log(result);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item,index) => (
          <div className="product" key={item.index}>
            <img src={item.images[0]} alt={item.brand} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div>
        <button
          className="ButtonContainer"
          onClick={FetchData}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More Data"}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
