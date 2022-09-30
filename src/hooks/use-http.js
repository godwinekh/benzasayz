import { useCallback } from "react";

const useHttp = () => {
  const postMovie = async (movie) => {
    const response = await fetch(
      "https://benzasayz-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    let status;

    if (response.ok) {
      status = `${movie.title} was successfully added!`;
    }
    if (!response.ok) {
      throw new Error(
        data.message ||
          `Unable to add ${movie.title}. Try again after a few moments`
      );
    }

    return status;
  };

  const fetchMovies = useCallback(async () => {
    const response = await fetch(
      "https://benzasayz-default-rtdb.firebaseio.com/movies.json"
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message ||
          "Error fetching movies from database. Please reload the page."
      );
    }
    return data;
  }, []);

  return { postMovie, fetchMovies };
};

export default useHttp;
