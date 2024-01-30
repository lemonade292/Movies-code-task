import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../__providers__/MoviesProvider";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../api/getMovieByID";
import { Movie } from "../../api/types";
import "./MovieDetail.scss";

interface MovieDetailProps {
  movie: Movie;
}
export const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <>
      {movie ? (
        <div className="movieDetail" data-testid="movieDetail">
          <img
            src={movie.backdropURL}
            alt="backdrop"
            className="movieDetail-backdrop"
          />

          <div className="movieDetail-textContainer">
            <h1>
              {movie.title}
            </h1>
            <div className="movieDetail-genreContainer">
           {movie.genreList.map(genre => <label>{genre}</label>)}
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
