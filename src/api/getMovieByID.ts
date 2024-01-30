import { options } from "./options";
import { Movie, MovieItemFromAPI } from "./types";

export const getMovieByID = async (movieID: string): Promise<Movie> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}`,
    options
  );
  const parsedMovieFromAPI: MovieItemFromAPI = await response.json();
    
  return new Movie(parsedMovieFromAPI);
};
