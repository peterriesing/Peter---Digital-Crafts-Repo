import React from "react";
import Info from "../Info/Info";
import "../../assets/Home.css";

const Home = ({ pokemon, index }) => {
  return (
    <div>
      <h1>Pokemans</h1>
      {pokemon.map((poke) => (
        <Info key={index} poke={poke} />
      ))}
    </div>
  );
};

export default Home;
