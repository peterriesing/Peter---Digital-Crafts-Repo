import { configureStore } from "@reduxjs/toolkit";
import selectedItem from "../reducers/SelectedProduct";
import Products from "../reducers/Products";
import { addToCart, removeFromCart } from "../reducers/Cart";

export const store = configureStore({
  reducer: {
    selectedItem: selectedItem,
    products: Products,
    removeFromCart: removeFromCart,
    addToCart: addToCart,
  },
});
