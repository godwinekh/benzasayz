import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consoleActions } from "../../store/console/actions-slice";

const MovieDatabase = () => {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.console.movies);

  const movieDetailsHandler = useCallback((event) => {
    const movieId = event.target.id;
    const selected = movies.find((movie) => movie.id === movieId);
    dispatch(consoleActions.activeMovieItem(selected));
  }, [movies, dispatch]);

  useEffect(() => {
    const formatMovieItems = movies.map((movieItem) => (
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
    }, [movies, movieDetailsHandler]);

  return (
    <div className="text-sm text-gray-800 px-10">
      <h2 className="border-b mb-3 py-1"> Select a movie to view, edit or delete</h2>
      <ul className="">{renderedMovies}</ul>
    </div>
  );
};

export default MovieDatabase;
