import { options } from "./options";
import { genreItem } from "./types";

export const getAllGenres = async (): Promise<{ genres: genreItem[] }> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );
  const formatedResponse = response.json();
  return formatedResponse;
};
