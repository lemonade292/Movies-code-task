import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from "../actions/movieActions";

export default function moviesReducer(
  state = { movies: [], error: "" },
  action: any
) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return action.payload;
    case GET_MOVIES_FAILURE:
      return action.payload;
    default:
      return state;
  }
}
