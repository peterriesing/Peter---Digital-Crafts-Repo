import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ItemCard from "./partials/ItemCard";
import { store } from "./store";

const Home = () => {
  const products = useSelector((store) => store.products);
  console.log(products);
  const featured = [];

  const getFeatured = (obj) => {
    obj.map((item) => {
      if (item.featured === true) {
        featured.push(item);
      }
    });
  };

  getFeatured(products);
  console.log("featured");
  console.log(featured);

  // const location = useLocation();

  return (
    <div className="featuredDiv">
      <h1>Featured Products</h1>
      <div className="featuredProducts">
        {/* GET ALL ITEMS */}
        {/* {products.map((item) => (
          <ItemCard item={item} />
        ))} */}
        {/* GET FEATURED ITEMS */}
        {featured.map((item) => (
          <>
            <ItemCard item={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
