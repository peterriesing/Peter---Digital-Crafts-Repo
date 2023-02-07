import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Card from "./components/Card/Card";
import { pokemon } from "./components/pokemon";

function App() {
  const [pokemonData, setPokemon] = useState(pokemon);
  return (
    <Routes>
      <Route path="/" element={<Home pokemon={pokemonData} />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
