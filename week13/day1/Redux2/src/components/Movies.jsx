import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "../reducers/moviesSlice";
import { useState } from "react";
import MovieContainer from "./MovieContainer";

const Movies = () => {
  const [movieToAdd, setMovieToAdd] = useState("");
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cinema</h1>
      {movies.length !== 0 ? (
        movies.map((movie) => <p>{movie?.name}</p>)
      ) : (
        <p>No movies yet</p>
      )}
      <input type="text" onChange={(e) => setMovieToAdd(e.target.value)} />
      <button onClick={() => dispatch(addMovie({ name: movieToAdd }))}>
        Add
      </button>
      <div className="results">
        <MovieContainer />
      </div>
    </div>
  );
};

export default Movies;
