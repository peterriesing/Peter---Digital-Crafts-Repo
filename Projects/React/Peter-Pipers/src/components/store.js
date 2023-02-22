import { configureStore } from "@reduxjs/toolkit";
import selectedItem from "../reducers/SelectedProduct";
import Products from "../reducers/Products";
import Cart from "../reducers/Cart";

export const store = configureStore({
  reducer: {
    products: Products,
    cart: Cart,
  },
});
