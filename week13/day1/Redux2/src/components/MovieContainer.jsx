import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MovieContainer = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const location = useLocation();
  const ID = location.state;
  useEffect(() => {
    const APIfunction = async (id) => {
      const APIurl = `http://www.omdbapi.com/?i=${id}&plot=full`;
      const APIkey = import.meta.env.VITE_KEY;
      const movieAPI = APIurl + APIkey;
      const rawData = await fetch(movieAPI);
      const json = await rawData.json();
      setSearchedMovie(json);
    };
    APIfunction(ID);
  }, []);

  return (
    <div>
      <div>
        <h1>{searchedMovie?.Title}</h1>
        <h4>{searchedMovie?.Actors}</h4>
        <h4>{searchedMovie?.Director}</h4>
        <h4>{searchedMovie?.Writer}</h4>
        <h4>{searchedMovie?.Year}</h4>
        <h4>{searchedMovie?.Runtime}</h4>
        <h4>{searchedMovie?.Released}</h4>
        <h4>{searchedMovie?.Genre}</h4>
        <h1>{searchedMovie?.Rated}</h1>
        <p>{searchedMovie?.Plot}</p>
      </div>
      {searchedMovie?.Ratings?.forEach((rating) => {
        <>
          {console.log(rating?.Source)}
          <h4>{rating?.Source}</h4>
          <h4>{rating?.Value}</h4>
        </>;
      })}
      <div>
        <img src={searchedMovie?.Poster} alt="" />
      </div>
    </div>
  );
};

export default MovieContainer;
