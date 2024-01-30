import { options } from "./options";
import { Movie, MovieItemFromAPI } from "./types"

export const getAllMovies = async(): Promise<Movie[]> => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const parsedMoviesFromAPI: {results: MovieItemFromAPI[]} = await response.json();
     
    return parsedMoviesFromAPI.results.map((movieFromAPI: MovieItemFromAPI) => new Movie(movieFromAPI));
}

