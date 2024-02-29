import {
    GET_SHOWS_SUCCESS,
    GET_SHOWS_FAILURE,
  } from "../actions/showsActions";
  
  export default function showsReducer(state = {shows: [], error: ''}, action: any) {
    switch (action.type) {
      case GET_SHOWS_SUCCESS:
        return action.payload;
      case GET_SHOWS_FAILURE:
        return action.payload;
      default:
        return state;
    }
  }
   