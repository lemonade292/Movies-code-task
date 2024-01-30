import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/movieReducer';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
})