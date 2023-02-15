import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <img
        className="blockbusterLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2560px-Blockbuster_logo.svg.png"
        alt=""
      />
      <div className="navbarLinks">
        <Link className="link" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="link" to="/">
          <h1>Search</h1>
        </Link>
        <Link className="link" to="/">
          <h1>Movies</h1>
        </Link>
        <Link className="link" to="/">
          <h1>TV</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
