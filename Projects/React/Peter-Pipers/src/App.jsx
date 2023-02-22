import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/partials/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Review from "./components/Review";
import About from "./components/About";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
