import { useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const MovieDatabase = (props) => {
  const [movies, setMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const { fetchMovies } = useHttp();
  const {onShowMovie} = props;

  const movieDetailsHandler = useCallback((event) => {
    const movieId = event.target.id;
    const selected = movies.find((movie) => movie.id === movieId);
    onShowMovie(selected);
  }, [movies, onShowMovie]);

  useEffect(() => {
    const extractedMovies = fetchMovies();
    const movieItems = [];

    extractedMovies.then((movie) => {
      for (const key in movie) {
        movieItems.push({
          key: key,
          ...movie[key],
        });
      }
      const formatMovieItems = movieItems.map((movieItem) => (
        <li
          className="py-2 px-5 cursor-pointer hover:bg-white"
          key={movieItem.key}
          id={movieItem.id}
          onClick={movieDetailsHandler}
        >
          {movieItem.title}
        </li>
      ));
      setRenderedMovies(formatMovieItems);
      setMovies(movieItems)
    });
  }, [fetchMovies, movieDetailsHandler]);

  return (
    <div className="text-sm text-gray-800 px-10">
      <h2 className="border-b mb-3 py-1">Database</h2>
      <ul className="">{renderedMovies}</ul>
    </div>
  );
};

export default MovieDatabase;
