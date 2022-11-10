import { configureStore } from "@reduxjs/toolkit";
import { mobilesApi } from "utils/mobilesApi";
import cartReducer from "utils/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Reducer for shopping cart number of items
    [mobilesApi.reducerPath]: mobilesApi.reducer, // Reducer for API
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mobilesApi.middleware),
});

export default store;