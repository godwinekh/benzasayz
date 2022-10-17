import React from "react"

const MovieContext = React.createContext({
  movies: [],
  isLoaded: null
});

export default MovieContext;