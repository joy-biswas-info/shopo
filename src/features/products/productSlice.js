import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  priceRange: 150,
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
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
