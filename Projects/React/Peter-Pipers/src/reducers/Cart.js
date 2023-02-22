import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, item) => {
      state.push(item);
    },
    removeFromCart: (state, item) => {
      state.filter(item);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = Cart.actions;

export default Cart.reducer;
