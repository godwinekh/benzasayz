import { useCallback, useContext, useEffect, useState } from "react";
import ActionsContext from "../../store/actions-context";

const MovieDatabase = () => {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const {movies, getActiveMovie} = useContext(ActionsContext);

  const movieDetailsHandler = useCallback((event) => {
    const movieId = event.target.id;
    const selected = movies.find((movie) => movie.id === movieId);
    getActiveMovie(selected);
  }, [movies, getActiveMovie]);

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
