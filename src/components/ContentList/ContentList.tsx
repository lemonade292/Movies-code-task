import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContentList.scss";
import magnifierButton from "../../assets/icons/magnifierButton.svg";
import { Content } from "../../api/types";
import { ContentDetailConnected } from "../ContentDetail/ContentDetail";

import { connect } from "react-redux";
import { fetchMovies } from "../../redux/actions/movieActions";
import { fetchGenres } from "../../redux/actions/genresActions";
import { fetchShows } from "../../redux/actions/showsActions";

interface ReduxProps {
  movies: Content[];
  shows: Content[];
  fetchMoviesAction: () => void;
  fetchGenresAction: () => void;
  fetchShowsAction: () => void;
}

export const ContentList: React.FC<ReduxProps> = ({
  movies,
  shows,
  fetchMoviesAction,
  fetchGenresAction,
  fetchShowsAction,
}) => {
  const [selectedMovie, setSelectedMovie] = useState<null | Content>(null);
  const [isMoviesSelected, setIsMoviesSelected] = useState<boolean>(true);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const navigate = useNavigate()

  useEffect(() => {
    fetchMoviesAction();
    fetchGenresAction();
    fetchShowsAction();
  }, [fetchMoviesAction, fetchGenresAction, fetchShowsAction]);

  useEffect(() => {
    movies && setSelectedMovie(movies[0]);
  }, [movies]);

  return (
    <div className="moviesList" data-testid="moviesList">
      {selectedMovie && (
        <ContentDetailConnected
          movie={selectedMovie}
          isDetailOpen={isDetailOpen}
          setIsDetailOpen={setIsDetailOpen}
        />
      )}
      <div className={isDetailOpen
            ? "moviesSwitchButtonsDiv_collapsed"
            : "moviesSwitchButtonsDiv_expanded"}>
        <button onClick={() => {                
                setIsMoviesSelected(true);
              }}>Movies</button>
        <button onClick={() => {                
                setIsMoviesSelected(false);
              }}>TV Shows</button>
      </div>
      <h1
        className={
          isDetailOpen
            ? "moviesListTitle_collapsed"
            : "moviesListTitle_expanded"
        }
      >
        {
          isMoviesSelected ? "Movies" : "TV Shows"
        }
      </h1>
      <div
        className={
          isDetailOpen
            ? "moviesContainer_collapsed"
            : "moviesContainer_expanded"
        }
      >
        {isMoviesSelected ? movies &&
          movies.map((movie: Content) => (
            <div
              className="movieItem"
              data-testid="movieItem"
              onClick={(e) => {
                e.stopPropagation()                  
                navigate(`/movies/${movie.ID}`)            
              }}
              key={movie.ID}
            >
              <img src={movie.imageURL} alt={movie.title} />
              <button className="movieItem-detailButton" onClick={(e)=>{
                e.stopPropagation()
                setSelectedMovie(movie);
                setIsDetailOpen(true);
              }}><img src={magnifierButton} alt="close button" /></button>
              <div className="movieItem-infoContainer">
                <p className="movieItem-movieTitle">{movie.title}</p>
                <div className="movieItem-dateVoteInfo">
                  <p className="movieItem-date">
                    {" "}
                    Released: {movie.release_date}
                  </p>
                  <p className="movieItem-voteCount">{movie.renderVotes()}</p>
                </div>
              </div>
            </div>
          )) : shows &&
          shows.map((show: Content) => (
            <div
              className="movieItem"
              data-testid="movieItem"
              onClick={() => {               
                navigate(`/shows/${show.ID}`)
              }}
              key={show.ID}
            >
              <img src={show.imageURL} alt={show.title} />
              
              <div className="movieItem-infoContainer">
                <p className="movieItem-movieTitle">{show.title}</p>
                <div className="movieItem-dateVoteInfo">
                  <p className="movieItem-date">
                    {" "}
                    Votes: {show.voteCount}
                  </p>
                  <p className="movieItem-voteCount">{show.renderVotes()}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, props: any) => {
  return {
    movies: state.moviesStore.movies,
    shows: state.showsStore.shows
  };
};

const mapActionsToProps = {
  fetchMoviesAction: fetchMovies,
  fetchGenresAction: fetchGenres,
  fetchShowsAction: fetchShows,
};

export const ContentListConnected = connect(
  mapStateToProps,
  mapActionsToProps
)(ContentList);
