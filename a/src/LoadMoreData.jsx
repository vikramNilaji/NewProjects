import { useState } from "react";
import { useEffect } from "react";
import "./App7.css"

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableItems,setDisableItems]=useState(false)

  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const ImageData = await response.json();
      if (ImageData && ImageData.products && ImageData.products.length) {
        setLoading(false);
        setProducts((prevData)=>[...prevData, ...ImageData.products]);
      }
      console.log(ImageData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, [count]);

  useEffect(()=>{
    if(products && products.length === 100 ){
      setDisableItems(true)
    }

  },[products])

  if (loading) {
    return <div> Loading Data... Please wait..</div>;
  } else {
    return (
      <div className="load-more-container"> 
        <div className="product-container">
          {products && products.length
            ? products.map((items, index) => {
                return (
                  <img className="product" key={items.id} src={items.thumbnail} alt={items.title} />
                );
              })
            : null}
        </div>
        <div className="button-container">
        <button onClick={() => setCount(count + 1)} disabled={disableItems}>
  Load More Products
</button>

{disableItems ? <div> You have reached to maximum items</div> : null}
        </div>
      </div>
    );
  }
};
 
export default LoadMoreData ;
