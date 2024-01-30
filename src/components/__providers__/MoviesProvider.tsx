import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { Movie } from "../../api/types";
import { getAllMovies } from "../../api/getAllMovies";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../api/getMovieByID";

interface MoviesContent {
  movies: Movie[];
  loading: boolean;
  setLoading: (v: boolean) => void;
}

const MoviesContext = createContext<MoviesContent>({
  movies: [],
  loading: false,
  setLoading: () => {},
});

export const MoviesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { movieID } = useParams();
  //console.log(movies.movieId);

  useEffect(() => {
    setLoading(true);
      getAllMovies()
        .then((movies: Movie[]) => {
          setMovies(movies);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  const value = { movies, loading, setLoading };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);
