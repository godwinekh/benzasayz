import React, { useEffect, useState } from "react";
import MovieContext from "./movie-context";
import { db } from "./../firebase-config";
import { ref, onValue } from "firebase/database";


const MovieProvider = (props) => {
  const [movies, setMovies] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderMovies = [];

  // Retrieve all movie reference from firebase database
  useEffect(() => {    
    const extractedMovies = ref(db, "/movies");
    onValue(extractedMovies, (snapshot) => {
      const data = snapshot.val();
      setMovies(data);
      if (data) {
        setIsLoaded(true);
      }
    });
  }, []);

  // Reformat movies from database for use 
  for (const key in movies) {
    renderMovies.push({
      ...movies[key],
      id: key,
    });
  };


  return (
    <MovieContext.Provider value={{movies: renderMovies.reverse(), isLoaded}}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
