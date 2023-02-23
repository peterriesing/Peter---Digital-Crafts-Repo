import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((state) => state.itemID !== action.payload.itemID);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = Cart.actions;

export default Cart.reducer;
