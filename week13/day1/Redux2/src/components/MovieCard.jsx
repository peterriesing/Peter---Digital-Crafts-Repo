import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link className="movieCard" to={`movie`} state={movie.imdbID}>
        <img src={movie.Poster} alt="" />
      </Link>
    </div>
  );
};

export default MovieCard;
