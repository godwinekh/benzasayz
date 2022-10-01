import { useCallback, useContext, useState } from "react";
import MoviePreview from "../components/Movies/MoviePreview";
import MovieContext from "../store/movie-context";

const useFind = () => {
  const [matchIsFound, setMatchIsFound] = useState(false);
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  // Find an exact mactch in the movies array
  const exactMatch = useCallback((title) => {
    const checkExactMatch = movies.find((movie) => movie.title.toLowerCase() === title);

    if (checkExactMatch) {
      setMatchIsFound(true);
      const movieMatch = (
        <MoviePreview
          className="text-gray-100 bg-image-full"
          key={checkExactMatch.id}
          id={checkExactMatch.id}
          title={checkExactMatch.title}
          rating={checkExactMatch.rating}
          synopsis={checkExactMatch.synopsis}
          style={{ backgroundImage: `url(${checkExactMatch.imageUrl.imagePrt})` }}
        />
      );
      return movieMatch;
    } else {
      setMatchIsFound(false);
      const movieMatch = <div><p className="mb-4">Sorry, we found no reviews for {title}.</p> <p>You can browse through our archives for other interesting reviews or try a different search.</p></div>;
      return movieMatch;
    }
  }, [movies]);

  // Find similar matches in the movies array
  const relatedMatches = useCallback((title) => {
    if (!title) {
      return;
    }

    const keywords = title.split(" ");
    const possibleMatches = [];

    for (const word of keywords) {
      const checkPossibleMatches = movies.find((movie) =>
        movie.title.toLowerCase().includes(word)
      );
      if (checkPossibleMatches) {
        possibleMatches.push(checkPossibleMatches);
      }
    };

    if (possibleMatches && !matchIsFound) {
      const foundMatches = possibleMatches.map((movie) => (
        <MoviePreview
          className="text-gray-100 bg-image-full"
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          synopsis={movie.synopsis}
          style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
        />
      ));
      const similarMatches = foundMatches;
      return similarMatches;
    } else {
      const selected = movies.slice(2,5);
      const randomMatches = selected.map((movie) => (
        <MoviePreview
          className="text-gray-100 bg-image-full"
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          synopsis={movie.synopsis}
          style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
        />
      ));
      const similarMatches = randomMatches;
      return similarMatches;
    }
  }, [movies, matchIsFound]);

  return { exactMatch, relatedMatches };
};

export default useFind;
