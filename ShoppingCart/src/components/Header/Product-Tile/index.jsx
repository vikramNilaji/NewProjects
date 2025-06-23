import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/Slices/cart-slice";


const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function handleAddtoCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart(){
    console.log('removed');
    dispatch(removeFromCart(product.id))
    

  }
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-10 h-[560px] w-80 mt-10 ml-5 rounded-xl ">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          {" "}
          <h1 className="w-40 trucate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex  justify-center w-full mt-5">
          <button
            onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart: handleAddtoCart}
            className="bg-red-950 text-white border-2 rouned-lg font-bold p-4 "
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
