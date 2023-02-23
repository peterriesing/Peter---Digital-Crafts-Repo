import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectItem } from "../../reducers/SelectedProduct";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div className="itemCard">
      <div>
        <h3 className="itemBrand">{item.brand}</h3>
        <h1 className="itemName">{item.product}</h1>
        <img className="itemImage" src={item.img} alt="product image" />
      </div>
      <div className="itemBottom">
        <h1 className="itemPrice">${item.price}</h1>
        <button
          onClick={() => dispatch(selectItem(item))}
          className="itemButton"
        >
          <Link className="itemButtonText" to="/product" state={item}>
            View Item
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
