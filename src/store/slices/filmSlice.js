import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = { items: [], loading: "" };
export const loadFilm = createAsyncThunk("film/getfilm", async () => {
    return axios.get("http://localhost:1337/api/films?populate=*").then((r) => (r.data));
  });

  

export const filmSlice = createSlice({
    name: "film",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(loadFilm.fulfilled, (state, action) => {
          state.loading = "fulfilled";
          state.items.length = 0;
          state.items.push(...action.payload.data);
          
        });
        builder.addCase(loadFilm.pending, (state, action) => {
          state.loading = "pending";
        });
        builder.addCase(loadFilm.rejected, (state, action) => {
          state.loading = "rejected";
        });
      },
    
});

// Action creators are generated for each case reducer function


export default filmSlice.reducer;
