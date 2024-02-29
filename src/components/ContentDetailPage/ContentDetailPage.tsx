import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMovieByID,
  getShowByID,
  getMovieRecomendations,
  getShowRecomendations,
} from "../../api/getContentByID";
import { Content } from "../../api/types";

import "./ContentDetailPage.scss";
import homeButton from "../../assets/icons/homeButton.svg";
import backButton from "../../assets/icons/backButton.svg";
export const ContentDetailPage = () => {
  const { contentID, platform } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Content | null>(null);
  const [recommendedArr, setRecomendedArr] = useState<Content[]>([]);

  useEffect(() => {
    if (contentID) {
      if (platform === "movies") {
        getMovieByID(contentID).then((movie: Content) => {
          setMovie(movie);
        });
        getMovieRecomendations(contentID).then((recommendedArr: Content[]) => {
          setRecomendedArr(recommendedArr);
        });
      } else {
        getShowByID(contentID).then((movie: Content) => {
          setMovie(movie);
        });
        getShowRecomendations(contentID).then((recommendedArr: Content[]) => {
          setRecomendedArr(recommendedArr);
        });
      }
    }
  }, [platform, contentID]);

  const handleGoToRecommended = (
    platform: string | undefined,
    contentID: string
  ) => {
    navigate(`/${platform}/${contentID}`);
  };
  const handleGoHome = () => {
    navigate(`/`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {movie ? (
        <div>
          <div>
            <div
              className={"movieDetail"}
              id={"movieDetail_expanded"}
              data-testid="movieDetail"
            >
              <button
                className="movieDetail-detailButton-backButton"
                onClick={() => handleGoBack()}
              >
                <img src={backButton} alt="back button" />
              </button>
              <button
                className="movieDetail-detailButton"
                onClick={() => handleGoHome()}
              >
                <img src={homeButton} alt="home button" />
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
                    {movie?.genres.map((genre, index) =>
                      index < movie.genres.length - 1 ? (
                        <label key={genre.id}>{genre.name} | </label>
                      ) : (
                        <label key={genre.id}>{genre.name}</label>
                      )
                    )}
                    {/* {movie.genres.map((genre, index) =>
                  index < movie.genreIds.length - 1 ? (
                    <label>{genre.name} | </label>
                  ) : (
                    <label>{genre}</label>
                  )
                  
                )} */}
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
          </div>
          <div className="recommendationsContainer">
            <h1>Recommendations</h1>
            <div className="moviesContainer" data-testid="moviesContainer">
              {recommendedArr &&
                recommendedArr.map((movie: Content) => (
                  <div
                    className="movieItem"
                    data-testid="movieItem"
                    onClick={() => {
                      handleGoToRecommended(platform, movie.ID);
                    }}
                    key={movie.ID}
                  >
                    <img src={movie.imageURL} alt={movie.title} />
                    <div className="movieItem-infoContainer">
                      <p className="movieItem-movieTitle">{movie.title}</p>
                      <div className="movieItem-dateVoteInfo">
                        <p className="movieItem-date">
                          {" "}
                          Released: {movie.release_date}
                        </p>
                        <p className="movieItem-voteCount">
                          {movie.renderVotes()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div data-testid="movieNotFound">Oops not found</div>
      )}
    </div>
  );
};
