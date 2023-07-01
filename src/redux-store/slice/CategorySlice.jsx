import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    loadList: (state, action) => {
      return [...action.payload];
    },
    addCategory: (state, action) => {
      return [...state, action.payload];
    },
    wipeCatList: () => {
      return [];
    },
  },
});

export const { loadList, addCategory, wipeCatList } = categorySlice.actions;

export default categorySlice.reducer;
