import { options } from "./options";
import { Content, MovieItemFromAPI, ShowItemFromAPI } from "./types";

export const getMovieByID = async (movieID: string): Promise<Content> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
    options
  );  
  const parsedMovieFromAPI: MovieItemFromAPI = await response.json();

  return new Content(parsedMovieFromAPI);
};

export const getMovieRecomendations = async (movieID: string): Promise<Content[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/recommendations?language=en-US&page=1`,
    options
  );
  
  const formatedResponse = await response.json()
  
  const recommendedArr: MovieItemFromAPI[] =await formatedResponse.results.slice(0,6)
 
  return recommendedArr.map(
    (movieFromAPI: MovieItemFromAPI) => new Content(movieFromAPI)
  );
  
};

export const getShowByID = async (showID: string): Promise<Content> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${showID}?language=en-US'`,
    options
  );
  
  const parsedShowFromAPI: ShowItemFromAPI = await response.json();

  return new Content(parsedShowFromAPI);
};

export const getShowRecomendations = async (showID: string): Promise<Content[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${showID}/recommendations?language=en-US&page=1`,
    options
  );
  
  const formatedResponse = await response.json()
  
  const recommendedArr: MovieItemFromAPI[] =await formatedResponse.results.slice(0,6)
 
  return recommendedArr.map(
    (movieFromAPI: MovieItemFromAPI) => new Content(movieFromAPI)
  );
};