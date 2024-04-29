import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  priceRange: 15000,
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.stock = !state.stock;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});
export const { toggleState, setPriceRange, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
