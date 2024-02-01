import {
    GET_GENRES_SUCCESS,
    GET_GENRES_FAILURE,
  } from "../actions/genresActions";
  
  export default function moviesReducer(state = {genres: [], error: ''}, action: any) {
    switch (action.type) {
      case GET_GENRES_SUCCESS:
        return action.payload;
      case GET_GENRES_FAILURE:
        return action.payload;
      default:
        return state;
    }
  }
   