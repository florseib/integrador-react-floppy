import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, decreaseCartAmount, purchase } from "../utils/cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    loadCart: (state, action) => {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
      // return [...state, action.payload];
    },
    emptyCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    decreaseAmount: (state, action) => {
      return {
        ...state,
        cartItems: decreaseCartAmount(state.cartItems, action.payload),
      };
    },
  },
});

export const { loadCart, addToCart, emptyCart, decreaseAmount, purchaseAndEmptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
