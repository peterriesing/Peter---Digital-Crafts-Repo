import React from "react";
import { Link } from "react-router-dom";

const Info = ({ poke }) => {
  return (
    <div>
      <li>
        <Link to="/card" state={poke.url}>
          {poke.name}
        </Link>
      </li>
    </div>
  );
};

export default Info;
