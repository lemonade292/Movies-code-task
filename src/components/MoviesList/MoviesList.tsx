import React, { useEffect, useState } from "react";
import "./MoviesList.scss";
import { Movie } from "../../api/types";
import {  MovieDetailConnected } from "../MovieDetail/MovieDetail";

import { connect } from "react-redux";
import { fetchMovies } from "../../redux/actions/movieActions";
import { fetchGenres } from "../../redux/actions/genresActions";

interface ReduxProps {
  movies: Movie[];
  fetchMoviesAction: () => void;
  fetchGenresAction: () => void;
}

export const MoviesList: React.FC<ReduxProps> = ({ movies, fetchMoviesAction, fetchGenresAction}) => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchMoviesAction();
    fetchGenresAction()
  }, [fetchMoviesAction, fetchGenresAction]);

  useEffect(() => {
    movies && setSelectedMovie(movies[0]);
  }, [movies]);

  return (
    <div className="moviesList" data-testid="moviesList">
      {selectedMovie && (
        <MovieDetailConnected
          movie={selectedMovie}
          isDetailOpen={isDetailOpen}
          setIsDetailOpen={setIsDetailOpen}
        />
      )}
      <div
        className={
          isDetailOpen
            ? "moviesContainer_collapsed"
            : "moviesContainer_expanded"
        }
      >
        {movies &&
          movies.map((movie: Movie) => (
            <div
              className="movieItem"
              onClick={() => {
                setSelectedMovie(movie);
                setIsDetailOpen(true);
              }}
              key={movie.ID}
            >
              <img src={movie.imageURL} alt={movie.title} />
              <div className="movieItem-infoContainer">
                <p className="movieItem-movieTitle">{movie.title}</p>
                <div className="movieItem-dateVoteInfo">
                  <p className="movieItem-date"> Released: {movie.release_date}</p>
                  <p className="movieItem-voteCount">{movie.renderVotes()}</p>
                  
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
  };
};

const mapActionsToProps =  {
  fetchMoviesAction: fetchMovies,
  fetchGenresAction: fetchGenres
};

export const MoviesListConnected = connect(
  mapStateToProps,
  mapActionsToProps
)(MoviesList);
