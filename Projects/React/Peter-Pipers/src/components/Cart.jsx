import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.length);
  console.log(cart);

  return (
    <div className="cartDiv">
      <h1>Shopping Cart</h1>
      <div className="cartItems"></div>
    </div>
  );
};

export default Cart;
