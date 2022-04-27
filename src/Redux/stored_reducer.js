import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Admin panel",
  initialState: {
    active: null,
    curretPage: {},
  },
  reducers: {
    setActive: (state, { payload }) => {
      console.log(payload);
      state.active = payload;
    },

    setCurrenPage: (state, { payload }) => {
      state.curretPage = payload;
    },
  },
});

export const { setActive, setCurrenPage } = allData.actions;

export default allData.reducer;
