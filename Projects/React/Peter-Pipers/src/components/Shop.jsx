import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./partials/ItemCard";

const Shop = () => {
  const products = useSelector((store) => store.products);
  console.log(products);
  const paddles = [];
  const balls = [];
  const clothing = [];
  const gear = [];

  const getPaddles = (obj) => {
    obj.map((item) => {
      if (item.type === "paddle") {
        paddles.push(item);
      }
    });
  };

  const getBalls = (obj) => {
    obj.map((item) => {
      if (item.type === "ball") {
        balls.push(item);
      }
    });
  };
  const getClothing = (obj) => {
    obj.map((item) => {
      if (item.type === "clothing") {
        clothing.push(item);
      }
    });
  };
  const getGear = (obj) => {
    obj.map((item) => {
      if (item.type === "gear") {
        gear.push(item);
      }
    });
  };
  getBalls(products);
  getPaddles(products);
  getClothing(products);
  getGear(products);
  return (
    <div className="shop">
      <div className="sectionDiv">
        <h1 className="sectionTitle">Paddles</h1>
        <div className="sectionProducts">
          {paddles.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
      <div className="sectionDiv">
        <h1 className="sectionTitle">Balls</h1>
        <div className="sectionProducts">
          {balls.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
      <div className="sectionDiv">
        <h1 className="sectionTitle">Clothing</h1>
        <div className="sectionProducts">
          {clothing.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
      <div className="sectionDiv">
        <h1 className="sectionTitle">Gear</h1>
        <div className="sectionProducts">
          {gear.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
