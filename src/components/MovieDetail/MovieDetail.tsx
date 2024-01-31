import React from "react";
import closeButton from "./closeButton.svg";
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
          className={"movieDetail"}
          id={isDetailOpen ? "movieDetail_expanded" : "movieDetail_collapsed"}
          data-testid="movieDetail"
        >
          <button
            className="movieDetail-closeButton"
            onClick={() => setIsDetailOpen(false)}
          >
            <img src={closeButton} alt="close button" />
          </button>
          <img
            src={movie.backdropURL}
            alt="backdrop"
            className="movieDetail-backdrop"
          />

          <div className="movieDetail-textContainer">
            <h1>{movie.title}</h1>
            <div className="movieDetail-infoContainer">
              <div className="movieDetail-genreContainer">
                {movie.genreList.map((genre, index) =>
                  index !== movie.genreList.length - 1 ? (
                    <label>{genre} | </label>
                  ) : (
                    <label>{genre}</label>
                  )
                )}
              </div>
              <div className="movieDetail-votesContainer">
                <label className="movieDetail-votesLabel">
                  {movie.renderVotes()}
                </label>
                <label> {movie.voteCount} votes</label>
              </div>
            </div>

            <p>{movie.overview}</p>
            <div className="movieDetail-buttonContainer">
                    <button className="movieDetail-buttonContainer-watchButton">Watch Now</button>
                    <button className="movieDetail-buttonContainer-watchlistButton"> Add to Watchlist</button>
            </div>
          </div>
        </div>
      ) : (
        <span>Oops not found</span>
      )}
    </>
  );
};
