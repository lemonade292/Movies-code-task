import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../__providers__/MoviesProvider";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../api/getMovieByID";
import { Movie } from "../../api/types";

export const MovieDetail: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { movieID } = useParams();
  const { setLoading } = useMoviesContext();

  useEffect(() => {
    setLoading(true);
    if (movieID) {
      getMovieByID(movieID)
        .then((movie: Movie) => {
          setMovie(movie);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      { movie ?
        <div className="MovieDetail" data-testid="MovieDetail">
          {movie.title} - {movie.renderVotes()}
        </div> : <span>Oops not found</span>
      }
    </>
  );
};
