import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "shopping_data",
  initialState: {
    values: {},
    currentPage: {},
  },
  setcurrentPage: (state, { payload }) => {
    state.currentPage = payload;
  },
  setValues: (state, { payload }) => {
    state.values = payload;
  },
});

export const { setcurrentPage, setValues } = counterSlice.actions;

export default counterSlice.reducer;
