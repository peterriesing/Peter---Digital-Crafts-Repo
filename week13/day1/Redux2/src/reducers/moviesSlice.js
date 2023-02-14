import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovie: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchMovie, searchID } = moviesSlice.actions;

export default moviesSlice.reducer;
