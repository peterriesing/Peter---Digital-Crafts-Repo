import React from "react";
import { Link } from "react-router-dom";
import carticon from "/cart.svg";
import { useSelector } from "react-redux";

const Nav = () => {
  // cart use selector cart.length

  const cart = useSelector((state) => state.cart);
  const cartTotal = cart.length;

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Peter Piper's</h1>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/shop">
          Shop
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div className="cartNav">
        <Link to="/cart">
          <img className="cartImg" src={carticon} alt="cart" />
        </Link>
        <div className="cartTotal">{cartTotal}</div>
      </div>
    </div>
  );
};

export default Nav;
