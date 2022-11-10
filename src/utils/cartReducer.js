import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // State module name
  initialState: { items: 0 },
  reducers: {
    updateCartItems(state, action) {
      state.items += action.payload.data.count;
    }
  }
});

// Export actions
export const { updateCartItems: updateCartItemsAction } = cartSlice.actions;
// Export reducer
export default cartSlice.reducer;