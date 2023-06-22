import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    loadCart: (state, action) => {
      return [...action.payload];
    },
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    emptyCart: () => {
      return [];
    },
  },
});

export const { loadCart, add, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
