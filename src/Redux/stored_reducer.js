import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Admin panel",
  initialState: {
    values: {},
    active: null,
    currentPage: {},
  },
  reducers: {
    setValues: (state, { payload }) => {
      state.values = payload;
    },
    setActive: (state, { payload }) => {
      console.log(payload);
      state.active = payload;
    },
    setCurrenPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    toggleModal: (state, { payload }) => {
      console.log(payload);
      state.currentPage.isOpenModal = payload;
    },
  },
});

export const { setValues, setActive, setCurrenPage, toggleModal } =
  allData.actions;

export default allData.reducer;
