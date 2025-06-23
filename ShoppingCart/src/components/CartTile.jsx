import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/Slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch=useDispatch()
  function handleRemoveFromCart(){
    dispatch(removeFromCart(cartItem.id))

  }
  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex  p-3 ">
        <img
          src={cartItem?.image}
          className="h-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-19 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{cartItem?.tile}</h1>
          <p className="text-white font-extrabold">{cartItem?.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rouned-lg font-bold p-4 "
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartTile;
