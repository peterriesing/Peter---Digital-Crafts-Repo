import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/partials/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Product from "./components/Product";
import Footer from "./components/partials/Footer";
import Cart from "./reducers/Cart";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
