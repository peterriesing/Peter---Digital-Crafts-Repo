import React from "react";
import { Link } from "react-router-dom";
import cart from "../../../public/cart.svg";

const Nav = () => {
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
      <div className="cart">
        <Link to="/cart">
          <img className="cartimg" src={cart} alt="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
