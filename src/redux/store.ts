import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movieReducer";
import genresReducer from "./reducers/genresReducer";

export default configureStore({
  reducer: {
    genresStore: genresReducer,
    moviesStore: moviesReducer,
  },
});
