import React from "react";

import { Movie } from "../../api/types";
import "./MovieDetail.scss";

interface MovieDetailProps {
  movie: Movie;
  isDetailOpen: boolean;
  setIsDetailOpen: (bol: boolean) => void;
}
export const MovieDetail: React.FC<MovieDetailProps> = ({
  movie,
  isDetailOpen,
  setIsDetailOpen,
}) => {
  return (
    <>
      {movie ? (
        <div
          className={
           "movieDetail"
          }
          id={isDetailOpen? 'movieDetail_expanded' : 'movieDetail_collapsed'}
          data-testid="movieDetail"
        >
          <button onClick={() => setIsDetailOpen(false)}>X</button>
          <img
            src={movie.backdropURL}
            alt="backdrop"
            className="movieDetail-backdrop"
          />

          <div className="movieDetail-textContainer">
            <h1>{movie.title}</h1>
            <div className="movieDetail-genreContainer">
              {movie.genreList.map((genre) => (
                <label>{genre}</label>
              ))}
            </div>
            <p>{movie.overview}</p>
            <label>{movie.renderVotes()}</label>
          </div>
        </div>
      ) : (
        <span>Oops not found</span>
      )}
    </>
  );
};
