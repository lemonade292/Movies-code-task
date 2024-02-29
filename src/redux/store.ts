import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movieReducer";
import genresReducer from "./reducers/genresReducer";
import showsReducer from "./reducers/showsReducer";

export default configureStore({
  reducer: {
    genresStore: genresReducer,
    moviesStore: moviesReducer,
    showsStore: showsReducer,
  },
});
