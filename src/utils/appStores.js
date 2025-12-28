import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./addToCartSlices";

const appStores = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStores;
