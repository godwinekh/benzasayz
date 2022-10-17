import { useCallback, useContext, useState } from "react";
import MovieContext from "../store/movie-context";

const useFind = () => {
  const [matchIsFound, setMatchIsFound] = useState(false);
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  // Find an exact match in the movies array
  const exactMatch = useCallback((title) => {
    const exactMovieMatch = movies.find((movie) => movie.title.toLowerCase() === title);

    if (exactMovieMatch) {
      setMatchIsFound(true);
      return [exactMovieMatch];
    } else {
      setMatchIsFound(false);
      const exactMovieMatch = false;
      return exactMovieMatch;
    }
  }, [movies]);

  // Find similar matches in the movies array
  const relatedMatches = useCallback((title) => {
    let filteredMatches;
    if (!title) {
      return;
    }

    if (matchIsFound) {
      filteredMatches = movies.filter(movie => movie.title.toLowerCase() !== title.toLowerCase());
    } else {
      filteredMatches = movies
    }
    
    const randomMatches = filteredMatches.slice(-5,-1);
    return randomMatches;
    
  }, [movies, matchIsFound]);

  return { exactMatch, relatedMatches };
};

export default useFind;
