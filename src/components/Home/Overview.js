import React, { useContext } from "react";
import { Fragment } from "react";
import MovieContext from "../../store/movie-context";
import MoviePreview from "../Movies/MoviePreview";
import LoadingSpinner from "../UI/LoadingSpinner";

const Overview = (props) => {
  const movieCtx = useContext(MovieContext);
  const { movies, isLoaded } = movieCtx;

  const filteredMovies = movies.filter(movie => movie.rating > 6);

  const min = 1;
  const max = filteredMovies.length;
  const range = max - min;
  const randomNum = (Math.random() * range) + min;
  console.log(randomNum);

  const contents = filteredMovies.map((movie) => (
    <MoviePreview
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

  const getCenterIndex = filteredMovies.map((movie) => (
    <MoviePreview
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
