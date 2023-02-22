import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Peter Piper's Pickleball Palace</h1>
      <div className="footerNav">
        <Link className="footlink" to="/">
          Home
        </Link>
        <Link className="footlink" to="/shop">
          Shop
        </Link>
        <Link className="footlink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Footer;
