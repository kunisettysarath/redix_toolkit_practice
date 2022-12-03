import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
    reducers: {
        themeChange: (state) => {return {theme: !state.theme}},
  },
});

export const { themeChange } = themeSlice.actions;
export default themeSlice.reducer