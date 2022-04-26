import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Admin panel",
  initialState: {
    active: null,
  },
  reducers: {
    setActive: (state, { payload }) => {
      state.active = payload;
    },
  },
});

export const { setActive } = allData.actions;

export default allData.reducer;
