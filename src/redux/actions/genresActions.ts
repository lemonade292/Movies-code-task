import { getAllGenres } from "../../api/getAllGenres";

export const GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";
export const GET_GENRES_FAILURE = "GET_GENRES_FAILURE";

export const fetchGenres = () => async (dispatch: any) => {
  try {
    const genres = await getAllGenres();

    dispatch({
      type: GET_GENRES_SUCCESS,
      payload: {
        genres: genres.genres,
        error: "",
      },
    });
  } catch (error) {
    dispatch({
      type: GET_GENRES_FAILURE,
      payload: {
        genres: [],
        error: "Error: Could not fetch genres",
      },
    });
  }
};
