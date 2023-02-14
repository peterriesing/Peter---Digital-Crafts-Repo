import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../reducers/moviesSlice";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const [movieToFetch, setMovieToFetch] = useState("");

  const dispatch = useDispatch();

  const APIfunction = async () => {
    const APIurl = `http://www.omdbapi.com/?s=${movieToFetch}`;
    const APIkey = import.meta.env.VITE_KEY;
    const movieAPI = APIurl + APIkey;
    const rawData = await fetch(movieAPI);
    const json = await rawData.json();
    console.log(json);
    dispatch(searchMovie(json.Search));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setMovieToFetch(e.target.value)}
      />
      <button onClick={() => APIfunction()}>Search</button>
      <div className="resultContainer">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
