import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ user }) => {
  const thing = { name: "Heat", author: "DeNiro" };
  return (
    <div>
      <h3>Welcome {user}</h3>
      <Link to="/account" state={thing}>
        Thing
      </Link>
    </div>
  );
};

export default Homepage;
