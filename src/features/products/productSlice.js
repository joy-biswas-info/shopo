import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  priceRange: 150,
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
  },
});
export const { toggleState, setPriceRange } = productSlice.actions;

export default productSlice.reducer;
