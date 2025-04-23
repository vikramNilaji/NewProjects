import { useState } from "react";
import { useEffect } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const FetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      const ImageData = await response.json();
      if (ImageData && ImageData.length) {
        setLoading(false);
        setProducts(ImageData);
      }
      console.log(ImageData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  if (loading) {
    return <div> Loading Data... Please wait..</div>;
  } else {
    return (
      <div className="container">
        <div>
          {products && products.length
            ? products.map((items, index) => {
                return (
                  <img
                    key={index}
                    src={items.download_url}
                    alt={items.download_url}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
};

export default LoadMoreData;
