import React from "react";
import "./MoviesList.scss";
import { useMoviesContext } from "../__providers__/MoviesProvider";
import { Movie } from "../../api/types";
import { useNavigate } from "react-router-dom";

export const MoviesList: React.FC = () => {
  const navigate = useNavigate();
  const { movies } = useMoviesContext();

  return (
    <div className="MoviesList" data-testid="MoviesList">
      {movies.map((movie: Movie) => (
        <div onClick={() => navigate(`/${movie.ID}`)} key={movie.ID}>
          {movie.renderVotes()}
        </div>
      ))}
    </div>
  );
};
