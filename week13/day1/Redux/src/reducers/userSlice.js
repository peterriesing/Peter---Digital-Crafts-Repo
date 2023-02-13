import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "Bob",
    settings: "Dark Mode",
    address: "123 Main",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserName: (state) => {
      state.value.name = "Blob";
    },
    changeUserSettings: (state) => {
      state.value.settings = "Light Mode";
    },
  },
});

export const { changeUserName, changeUserSettings } = userSlice.actions;

export default userSlice.reducer;
