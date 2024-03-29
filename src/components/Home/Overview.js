import React, { useContext } from "react";
import { Fragment } from "react";
import MovieContext from "../../store/movie-context";
import MovieItem from "../Movies/MovieItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
}

const Overview = () => {
  const movieCtx = useContext(MovieContext);
  const { movies, isLoaded } = movieCtx;

  const filteredMovies = movies.filter(movie => movie.rating > 7.0);  
  const topMovies = shuffle(filteredMovies);

  const contents = topMovies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      className={`basis-1/4 shadow-xl shadow-slate-900 hover:scale-105 bg-image-full`}
      title={movie.title}
      rating={movie.rating}
      style={{
        backgroundImage: `url(${movie.imageUrl.imagePrt})`,
        height: "28em",
        width: "auto",
        zIndex: "auto",
      }}
    />
  ));

  const favorites = contents.slice(0, 3);

  const getCenterIndex = topMovies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      className={`basis-2/4 shadow-xl shadow-slate-900 hover:scale-105 z-10 bg-image-full`}
      title={movie.title}
      rating={movie.rating}
      style={{ backgroundImage: `url(${movie.imageUrl.imageLsc})`, height: "32em" }}
    />
  ));

  favorites[1] = getCenterIndex[1];

  return (
    <Fragment>
      <h2 className="hidden lg:block pt-14 pb-10 text-center text-4xl font-extrabold bg-slate-900 text-stone-300">
        Top Picks You'd Like
      </h2>
      <div className="hidden lg:flex flex-row justify-center items-center pb-28 px-5 w-full text-white bg-gradient-to-b from-slate-900 to-gray-800">
        {favorites}
        {!isLoaded && <LoadingSpinner />}
      </div>

    </Fragment>
  );
};

export default Overview;
