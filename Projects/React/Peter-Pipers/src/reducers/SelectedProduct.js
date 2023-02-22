import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const SelectedProduct = createSlice({
  name: "SelectedProduct",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectItem } = SelectedProduct.actions;

export default SelectedProduct.reducer;
