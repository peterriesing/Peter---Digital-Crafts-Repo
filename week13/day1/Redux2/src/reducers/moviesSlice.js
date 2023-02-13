import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const addedMovie = state;
      addedMovie.push(action.payload);
      state = addedMovie;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
