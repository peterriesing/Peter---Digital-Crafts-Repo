import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/Cart";

const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const item = location.state;
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="productDiv">
      <img className="productImg" src={item.img} alt="product image" />

      <div className="productDetails">
        <h3>{item.brand}</h3>
        <h2>{item.product}</h2>
        <h1>${item.price}</h1>
        <h4>Product #{item.itemID}</h4>
        <p>{item.description}</p>
        <div className="productAddDiv">
          <button
            onClick={() => dispatch(addToCart(item))}
            className="productAddButton"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
