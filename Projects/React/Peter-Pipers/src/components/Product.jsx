import React from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <div className="productDiv">
      <div className="productImgDiv">
        <img className="productImg" src={item.img} alt="product image" />
      </div>
      <div className="ProductDetails">
        <h3>{item?.brand}</h3>
        <h2>{item?.product}</h2>
        <h1>{item?.price}</h1>
        <h5>Product #{item.itemID}</h5>
        <p>{item.description}</p>
      </div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
