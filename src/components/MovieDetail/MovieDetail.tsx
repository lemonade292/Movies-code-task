import React from "react";
import closeButton from "./closeButton.svg";
import { Movie, genreItem } from "../../api/types";
import { connect } from "react-redux";
import "./MovieDetail.scss";

interface OwnProps {
  movie: Movie;
  isDetailOpen: boolean;
  setIsDetailOpen: (bol: boolean) => void;
}
interface ReduxProps {
  genres: genreItem[];
}

const MovieDetail: React.FC<OwnProps & ReduxProps> = ({
  movie,
  isDetailOpen,
  setIsDetailOpen,
  genres,
}) => {

  const buildGenreList = (idList: number[]): string[] => {
    const genreList = idList.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      if (!genre) {
        return "";
      }
      return genre?.name;
    });
    if (!genreList) {
      return [];
    }
    return genreList;
  };

  return (
    <>
      {movie && genres ? (
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
                {buildGenreList(movie.genreIds).map(genre => <label>{genre}</label>)}
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
              <button className="movieDetail-buttonContainer-watchButton">
                Watch Now
              </button>
              <button className="movieDetail-buttonContainer-watchlistButton">
                {" "}
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <span>Oops not found</span>
      )}
    </>
  );
};
const mapStateToProps = (state: any, props: any) => {
  return {
    genres: state.genresStore.genres,
  };
};

export const MovieDetailConnected = connect(mapStateToProps)(MovieDetail);
