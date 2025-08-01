import { useState, useEffect } from "react";
// import { Circles, CirclesWithBar } from "react-loader-spinner";
// import { TailSpin } from "react-loader-spinner";
import ProductTile from "../components/Header/Product-Tile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchListOfProducts() {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-fll justify-center items-center">
          <h1>Loading ...Please wait....</h1>
        </div>
      ) : (
        <div className=" gap-x-40 min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto">
          {products && products.length
            ? products.map((productItem,index) => {
                return <ProductTile product={productItem} key={index} />;
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
