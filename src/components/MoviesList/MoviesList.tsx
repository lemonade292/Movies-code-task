import React, { useEffect, useState } from "react";
import "./MoviesList.scss";
import { useMoviesContext } from "../__providers__/MoviesProvider";
import { Movie } from "../../api/types";
import { MovieDetail } from "../MovieDetail/MovieDetail";

export const MoviesList: React.FC = () => {
  const { movies } = useMoviesContext();
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null);

  useEffect(() => {
    movies && movies[0] && setSelectedMovie(movies[0]);
  }, [movies]);

  return (
    <div className="moviesList" data-testid="moviesList">
      {selectedMovie && <MovieDetail movie={selectedMovie}></MovieDetail>}

      {movies.map((movie: Movie) => (
        <div
          className="movieItem"
          onClick={() => setSelectedMovie(movie)}
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
  );
};
