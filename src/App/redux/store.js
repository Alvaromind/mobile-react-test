import { configureStore } from "@reduxjs/toolkit";
import { mobilesApi } from "utils/mobilesApi";
import cartReducer from "utils/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [mobilesApi.reducerPath]: mobilesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mobilesApi.middleware),
});

export default store;