import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import productReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
