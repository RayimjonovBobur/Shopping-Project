import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Admin panel",
  initialState: {
    active: null,
    adminActive: 0,
  },
  reducers: {
    setActive: (state, { payload }) => {
      state.active = payload;
    },
    setAdminActive: (state, { payload }) => {
      state.adminActive = payload;
    },
  },
});

export const { setActive, setAdminActive } = allData.actions;

export default allData.reducer;
