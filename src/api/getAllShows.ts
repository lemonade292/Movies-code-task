import { options } from "./options";
import { Content, ShowItemFromAPI } from "./types";

export const getAllShows= async (): Promise<Content[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  );
  const parsedShowsFromAPI: { results: ShowItemFromAPI[] } =
    await response.json();
    console.log(parsedShowsFromAPI)
  return parsedShowsFromAPI.results.map(
    (movieFromAPI: ShowItemFromAPI) => new Content(movieFromAPI)
  );
};
