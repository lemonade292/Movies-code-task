import { getAllShows } from "../../api/getAllShows";

export const GET_SHOWS_SUCCESS = "GET_SHOWS_SUCCESS";
export const GET_SHOWS_FAILURE = "GET_SHOWS_FAILURE";

export const fetchShows = () => async (dispatch: any) => {
  try {
    const shows = await getAllShows();
    dispatch({
      type: GET_SHOWS_SUCCESS,
      payload: {
        shows: shows,
        error: "",
      },
    });
  } catch (error) {
    dispatch({
      type: GET_SHOWS_FAILURE,
      payload: {
        shows: [],
        error: "Error: Could not fetch shows",
      },
    });
  }
};
