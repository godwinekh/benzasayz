import { useCallback, useContext, useState } from "react";
import MovieContext from "../store/movie-context";

const useFind = () => {
  const [matchIsFound, setMatchIsFound] = useState(false);
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  // Find an exact match in the movies array
  const exactMatch = useCallback(
    (title) => {
      const exactMovieMatch = movies.find(
        (movie) => movie.title.toLowerCase() === title.trim()
      );

      if (exactMovieMatch) {
        setMatchIsFound(true);
        return [exactMovieMatch];
      } else {
        setMatchIsFound(false);
        const exactMovieMatch = false;
        return exactMovieMatch;
      }
    },
    [movies]
  );

  // Find similar matches in the movies array
  const relatedMatches = useCallback(
    (title) => {
      let filteredMatches;
      if (!title) {
        return;
      }

      if (matchIsFound) {
        filteredMatches = movies.filter(
          (movie) => movie.title.toLowerCase() !== title.toLowerCase()
        );
      } else {
        // filteredMatches = movies
        const findClosest = movies.filter((movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase())
        );

        if (findClosest.length > 0) {
          filteredMatches = findClosest;
        } else {
          const possibleMatches = [];
          const keywords = title.toLowerCase().split(" ");
          if (keywords.includes("the") || keywords.includes("a") || keywords.includes("an")) {
            let index = 0;
            for (const word of keywords) {
              if (word === "the" || word === "a" || word === "an" ) {
                keywords.splice(index, 1);
              }
              index++;
            }
          }

          for (const word of keywords) {
            const findPossibleMatches = movies.find((movie) =>
              movie.title.toLowerCase().includes(word.toLowerCase())
            );
            if (findPossibleMatches) {
              possibleMatches.push(findPossibleMatches);
            }
          }

          filteredMatches = [...new Set(possibleMatches)];
        }
      }

      if (filteredMatches.length > 5) {
        const randomMatches = filteredMatches.slice(-5, -1);
        return randomMatches;
      } else {
        return filteredMatches;
      }
    },
    [movies, matchIsFound]
  );

  return { exactMatch, relatedMatches };
};

export default useFind;
