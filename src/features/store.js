import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import productReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
