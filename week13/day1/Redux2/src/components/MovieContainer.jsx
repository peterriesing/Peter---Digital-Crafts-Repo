import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

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
      <Navbar />
      <div className="movie">
        <div className="info">
          <div className="titleDiv">
            <h1 className="title">{searchedMovie?.Title}</h1>
            <h4 className="type">{searchedMovie?.Type}</h4>
          </div>
          <div className="details">
            <h4>{searchedMovie?.Year}</h4>
            <h4>{searchedMovie?.Genre}</h4>
            <h4>{searchedMovie?.Runtime}</h4>
          </div>
          <div className="buttons">
            <button className="play">
              <span className="playicon"></span>Play
            </button>
            <button className="trailer">
              <span className="trailericon"></span>Trailer
            </button>
            <button className="add">+ Watchlist</button>
          </div>
          <div className="imdb">
            <h1 className="rating">{searchedMovie?.Rated}</h1>
            <img
              className="imdbLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png"
              alt=""
            />
            <h4 className="imdbRating">{searchedMovie?.imdbRating} / 10</h4>
          </div>
          <div className="people">
            <h5>Top Cast</h5>
            <h4>{searchedMovie?.Actors}</h4>
            <h5>Director</h5>
            <h4>{searchedMovie?.Director}</h4>
            <h5>Writer</h5>
            <h4>{searchedMovie?.Writer}</h4>
          </div>
          <div className="plotDiv">
            <h5>Plot</h5>
            <p className="plot">{searchedMovie?.Plot}</p>
          </div>
          <div className="people">
            <h5>Release Date</h5>
            <h4>{searchedMovie?.Released}</h4>
          </div>
        </div>
        <div className="poster">
          <img src={searchedMovie?.Poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
