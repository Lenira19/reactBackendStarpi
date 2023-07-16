import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const cartStorageString = localStorage.getItem("cart");

const initialState ={ loading: "initial", items: [] };

export const makeOrder = createAsyncThunk(
    "cart/makeOrder",
    async (orderData) => {
      console.log(orderData);
      return axios
        .post("http://localhost:1337/api/orders", { data: orderData })
       .then((r) => r.data);
    }
  );

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartStorageString
    ? JSON.parse(cartStorageString)
    : initialState,
    reducers: {
        addToCart: (state, action) => {
            let itemToAdd = action.payload;
            let index = state.items.findIndex((item) => item.food.id_name === itemToAdd.id_name);
            if (index >= 0) {
                state.items[index].qty++;
            } else {
                state.items.push({ qty: 1, food: itemToAdd });
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
        increaseItemQty: (state, action) => {
            let index = state.items.findIndex((item) => item.food.id_name === action.payload);
            state.items[index].qty++;
        },
        decreaseItemQty: (state, action) => {
            let index = state.items.findIndex((item) => item.food.id_name === action.payload);
            state.items[index].qty--;
            if (!state.items[index].qty) state.items.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(makeOrder.fulfilled, (state, action) => {
          state.loading = "fulfilled";
          state.items.length = 0;
          
          
        });
        builder.addCase(makeOrder.pending, (state, action) => {
          state.loading = "pending";
        });
        builder.addCase(makeOrder.rejected, (state, action) => {
         state.loading = "rejected";
        });
      },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, increaseItemQty, decreaseItemQty } =
    cartSlice.actions;

export default cartSlice.reducer;
