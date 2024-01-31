import React, { useEffect, useState } from "react";
import "./MoviesList.scss";

import { Movie } from "../../api/types";
import { MovieDetail } from "../MovieDetail/MovieDetail";
import { fetchMovies } from "../../redux/actions/movieActions";
import { connect } from "react-redux";

export const MoviesList: React.FC<any> = ({ movies, fetchMovies }) => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    movies && setSelectedMovie(movies[0]);
  }, [movies]);

  return (
    <div className="moviesList" data-testid="moviesList">
      {selectedMovie && (
        <MovieDetail
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
              onClick={() =>{ setSelectedMovie(movie); setIsDetailOpen(true)}}
              key={movie.ID}
            >
              <img src={movie.imageURL} alt={movie.title} />
              <p>{movie.title}</p>
              <div className="voteInfo">
                <p className="voteCount">{movie.renderVotes()}</p>
                <p>{movie.voteCount}</p>
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

const mapActionsToProps = {
  fetchMovies: fetchMovies,
};

export const MoviesListConnected = connect(
  mapStateToProps,
  mapActionsToProps
)(MoviesList);
