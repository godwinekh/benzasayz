import React from "react";
import MovieContext from "./movie-context";

const movieContext = {
  movies: [
    {
      id: "m1",
      imagePath: "/Images/morbius.jpg",
      title: "Morbius",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 4.0,
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
      fullReview: "major text",
    },
    {
      id: "m2",
      imagePath: "/Images/scream.jpg",
      title: "Scream",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 7.0,
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
      fullReview: "major text",
    },
    {
      id: "m3",
      imagePath: "/Images/uncharted.png",
      title: "Uncharted",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 4.0,
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
      fullReview: "major text",
    },
    {
      id: "m4",
      imagePath: "/Images/6366.jpg",
      title: "Deadpool",
      synopsis:
        "The movie was just there. Nothing really special or so fun about it.",
      releaseDate: "2022-05-23",
      rating: 4.0,
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
      fullReview: "major text",
    },
  ],
};

const MovieProvider = (props) => {
  return (
    <MovieContext.Provider value={movieContext}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
