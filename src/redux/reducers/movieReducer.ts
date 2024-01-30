import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../../api/getAllMovies";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: [],
  },
  reducers: {
    getMovies: (state) => {
      getAllMovies().then((response) => {
        return response;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
