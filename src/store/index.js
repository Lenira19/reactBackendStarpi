import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cartSlice";
import FilmSlice from "./slices/filmSlice";
export const store = configureStore({
    reducer: {
        cart: CartReducer,
        film: FilmSlice
    }

});

