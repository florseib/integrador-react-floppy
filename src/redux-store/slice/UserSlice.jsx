import { createSlice } from "@reduxjs/toolkit";
import { addUserToList, logUser } from "../utils/userUtils";

const INITIAL_STATE = {
  loggedUser: null,
  userList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        loggedUser: logUser(action.payload),
      };
    },
    createUser: (state, action) => {
      return addUserToList(state, action.payload);
    },
    logOut: (state) => {
      return { ...state, loggedUser: null };
    },
  },
});

export const { logIn, createUser, logOut } = userSlice.actions;

export default userSlice.reducer;
