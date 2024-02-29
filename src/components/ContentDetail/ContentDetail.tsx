import React, { useCallback } from "react";
import closeButton from "../../assets/icons/closeButton.svg";
import { Content, genreItem } from "../../api/types";
import { connect } from "react-redux";
import "./ContentDetail.scss";

interface OwnProps {
  movie: Content;
  isDetailOpen: boolean;
  setIsDetailOpen: (bol: boolean) => void;
}
interface ReduxProps {
  genres: genreItem[];
}

export const ContentDetail: React.FC<OwnProps & ReduxProps> = ({
  movie,
  isDetailOpen,
  setIsDetailOpen,
  genres,
}) => {
  const buildGenreList = useCallback(
    (idList: number[]): string[] => {
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
    },
    [genres]
  );

  return (
    <>
      {movie && genres.length ? (
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
                {buildGenreList(movie.genreIds).map((genre, index) =>
                  index < movie.genreIds.length - 1 ? (
                    <label key={index}>{genre} | </label>
                  ) : (
                    <label key={index}>{genre}</label>
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
        <span data-testid="movieNotFound">Oops not found</span>
      )}
    </>
  );
};
const mapStateToProps = (state: any, props: any) => {
  return {
    genres: state.genresStore.genres,
  };
};

export const ContentDetailConnected = connect(mapStateToProps)(ContentDetail);
