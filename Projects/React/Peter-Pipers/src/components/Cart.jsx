import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../reducers/Cart";
import Payment from "./partials/Payment";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let total = 0;
  const cartTotal = () => {
    cart.map((item) => (total += item.price));
  };
  cartTotal();

  return (
    <div className="cartDiv">
      <h1>Shopping Cart</h1>
      <div className="cartItems">
        {cart.map((item) => (
          <div className="cartItem">
            <div className="cartItemDiv">
              <img className="cartItemImg" src={item.img} alt="" />
              <div className="cartItemDetails">
                <h1 className="cartProduct">{item.brand}</h1>
                <h1 className="cartProduct">{item.product}</h1>
                <h1 className="cartProductPrice">${item.price}</h1>
              </div>
            </div>
            <div className="cartButtonDiv">
              <button
                className="cartButton"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pay">
        <h1>Order total: ${total.toFixed(2)}</h1>
      </div>
      {cart.length === 0 ? <h3>Your cart is empty</h3> : <Payment />}
    </div>
  );
};

export default Cart;
