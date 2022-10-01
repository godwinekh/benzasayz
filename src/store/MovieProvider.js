import React, { useEffect, useReducer, useState } from "react";
import MovieContext from "./movie-context";
import { db } from "./../firebase-config";
import { ref, onValue } from "firebase/database";

const movieContext = {
  movies: [
    {
      id: "m1",
      imagePath: "/Images/morbius.jpg",
      title: "Morbius",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 5.3,
      cast: [
        "Tom Holland",
        "Mark Wahlberg",
        "Sophia Ali",
        "Tati Gabrielle",
        "Antonio Banderas",
      ],
      genre: ["action", "adventure", "comedy"],
      trailer: "some link",
      download: "some link",
      fullReview: "No review posted yet. Sorry!",
    },
    {
      id: "m2",
      imagePath: "/Images/scream.jpg",
      title: "Scream",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 3.5,
      cast: [
        "Tom Holland",
        "Mark Wahlberg",
        "Sophia Ali",
        "Tati Gabrielle",
        "Antonio Banderas",
      ],
      genre: ["action", "adventure", "comedy"],
      trailer: "some link",
      download: "some link",
      fullReview: "No review posted yet. Sorry!",
    },
    {
      id: "m3",
      imagePath: "/Images/uncharted.png",
      title: "Uncharted",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 3.5,
      cast: [
        "Tom Holland",
        "Mark Wahlberg",
        "Sophia Ali",
        "Tati Gabrielle",
        "Antonio Banderas",
      ],
      genre: ["action", "adventure", "comedy"],
      trailer: "some link",
      download: "some link",
      fullReview: "No review posted yet. Sorry!",
    },
    {
      id: "m4",
      imagePath: "/Images/6366.jpg",
      title: "Deadpool",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 7.5,
      cast: [
        "Tom Holland",
        "Mark Wahlberg",
        "Sophia Ali",
        "Tati Gabrielle",
        "Antonio Banderas",
      ],
      genre: ["action", "adventure", "comedy"],
      trailer: "some link",
      download: "some link",
      fullReview: "No review posted yet. Sorry!",
    },
    {
      id: "m5",
      imagePath: "/Images/thor.webp",
      title: "Thor",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 6.2,
      cast: [
        "Tom Holland",
        "Mark Wahlberg",
        "Sophia Ali",
        "Tati Gabrielle",
        "Antonio Banderas",
      ],
      genre: ["action", "adventure", "comedy"],
      trailer: "some link",
      download: "some link",
      fullReview: "No review posted yet. Sorry!",
    },
  ],
};


const MovieProvider = (props) => {
  const [movies, setMovies] = useState();
  const renderMovies = [];


  // Retrieve all movie reference from firebase database
  useEffect(() => {    
    const extractedMovies = ref(db, "/movies");
    onValue(extractedMovies, (snapshot) => {
      const data = snapshot.val();
      setMovies(data);
    });
  }, []);

  // Reformat movies from database for use
  for (const key in movies) {
    renderMovies.push({
      key: key,
      ...movies[key],
    });
  };


  return (
    <MovieContext.Provider value={{movies: renderMovies}}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
