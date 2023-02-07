import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Card = () => {
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();
  const pokeurl = location.state;
  useEffect(() => {
    const fetchPokemon = async (url) => {
      const rawData = await fetch(url);
      const pokeData = await rawData.json();
      setPokemon(pokeData);
    };
    fetchPokemon(pokeurl);
  }, []);

  return (
    <div className="PokeCard">
      <img src={pokemon?.sprites?.front_default} alt="front" />
      <img src={pokemon?.sprites?.back_default} alt="front" />
      <h1>{pokemon?.name}</h1>
      <div className="Stats">
        <h3>Base XP: {pokemon?.base_experience}</h3>
        <h3>Height: {pokemon?.height}</h3>
        <h3>Weight: {pokemon?.weight}</h3>
        {pokemon?.moves?.slice(0, 3).map((ele) => (
          <h5>{ele?.move?.name}</h5>
        ))}
      </div>
    </div>
  );
};

export default Card;
