import { useState } from "react";
import { useEffect } from "react";
import "./App7.css";

const LoadMoreData = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [disable,setDisable]=useState(false)

  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setLoading(false);
        setProducts((prevData)=> [...prevData,...result.products]);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, [count]);

  useEffect(()=>{
    if(products && products.length === 100){
      setDisable(true)
    }

  },[products])

  if (loading) {
    return <div> Loading ... Please wait..</div>;
  } else {
    return (
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length
            ? products.map((items, index) => {
                return (
                  <img
                    className="product"
                    key={items.id}
                    src={items.thumbnail}
                    alt={items.thumbnail}
                  />
                );
              })
            : null}
        </div>

        <button disabled={disable} onClick={()=> setCount(count+1)}>Load More Products</button>
        {disable ? <div> you have reached the maximum </div> : null  }
      </div>
    );
  }
};

export default LoadMoreData;
