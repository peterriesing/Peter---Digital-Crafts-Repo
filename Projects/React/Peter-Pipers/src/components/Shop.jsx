import React from "react";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((store) => store.products);
  console.log(products);
  const paddles = [];
  const balls = [];

  const getPaddles = (obj) => {
    obj.map((item) => {
      if (item.type === "paddle") {
        paddles.push(item);
      }
    });
  };

  const getBalls = (obj) => {
    obj.map((item) => {
      if (item.type === "paddle") {
        balls.push(item);
      }
    });
  };
  getBalls(products);
  getPaddles(products);
  return (
    <div>
      <div>
        <h1>Paddles</h1>
      </div>
      <div>
        <h1>Balls</h1>
      </div>
    </div>
  );
};

export default Shop;
