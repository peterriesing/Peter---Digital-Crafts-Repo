import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../reducers/moviesSlice";
import { useState } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

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
      <Navbar />
      <div className="search">
        <input
          className="searchBar"
          type="text"
          placeholder="Search by title"
          onChange={(e) => setMovieToFetch(e.target.value)}
        />
        <button className="searchButton" onClick={() => APIfunction()}>
          Search
        </button>
      </div>
      <div className="resultContainer">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
