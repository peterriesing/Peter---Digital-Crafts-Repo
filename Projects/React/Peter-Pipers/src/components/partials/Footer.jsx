import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Peter Piper's Pickleball Palace</h1>
      <div className="footerBottom">
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
        <div className="footerDetails">
          <p>Copyright 2023 Peter Piper's. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
