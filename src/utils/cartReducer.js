import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: 0 },
  reducers: {
    updateCartItems(state, action) {
      state.items += action.payload.data.count;
    }
  }
});

export const { updateCartItems: updateCartItemsAction } = cartSlice.actions;
export default cartSlice.reducer;