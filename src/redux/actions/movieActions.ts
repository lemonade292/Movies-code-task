import { getAllMovies } from "../../api/getAllMovies";

export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const fetchMovies = () => async (dispatch: any) => {
  try {
    const movies = await getAllMovies();
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: {
        movies: movies,
        error: "",
      },
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_FAILURE,
      payload: {
        movies: [],
        error: "Error: Could not fetch movies",
      },
    });
  }
};
