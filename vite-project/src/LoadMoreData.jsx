import React, { useEffect } from "react";
import { useState } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const FetchProducts = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data1 = await response.json();
      if (data1 && data1.products && data1.products.length) {
        setProducts(data1.products);
        setLoading(true);
      }

      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  if (loading) {
    return <div> Items loading... Please wait....</div>;
  } else {
    return (
      <div className="container">
        <div className="product-container">
          {products && products.length
            ? products.map((item) => {
                return (
                  <div className="products" key={item.id}>
                    {" "}
                    <img src={item.thumbnail} alt={item.title} /> {item.title}{" "}
                  </div>
                );
              })
            : null}
        </div>

        <div>
          <button className="button-container">Load More Products</button>
        </div>
      </div>
    );
  }
};

export default LoadMoreData;
