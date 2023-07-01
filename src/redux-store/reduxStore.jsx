import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import bookReducer from "./slice/BookSlice";
import categoryReducer from "./slice/CategorySlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  cart: cartReducer,
  bookList: bookReducer,
  category: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
