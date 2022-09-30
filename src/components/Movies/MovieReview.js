import React, { useContext } from "react";
import MovieContext from "../../store/movie-context";
import Modal from "../UI/Modal";

const MovieReview = (props) => {
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;
  const { movieId } = props;

  const movieItem = movies.find((movie) => movie.id === movieId);

  return (
    <Modal onDismiss={props.onDismiss}>
      <div className="bg-gray-900 text-gray-100">
        <img className="" src={movieItem.imagePath} alt={""} />

        <div className="flex flex-row justify-between font-bold text-xl p-3">
          <h3 className="capitalize text-lg">{movieItem.title}</h3>
          <p className="text-amber-500">
            <i className="bi-star mr-1"></i> {movieItem.rating}
          </p>
        </div>

        <div className="p-3 bg-gray-100 text-stone-700">
          <div className="leading-relaxed capitalize py-3">
            <p>
              release date: {movieItem.releaseDate} <span></span>
            </p>
            <p>genre: {movieItem.genre.join(" | ")}</p>
            <p className="leading-5">
              starring: {movieItem.cast.join(", ")}
            </p>
          </div>

          <div className="flex flex-row gap-5 justify-evenly py-8 items-end">
            <div className="text-center">
              <a href={movieItem.trailer}>
                <i className="bi-youtube text-5xl text-red-600"></i>
              </a>
              <p className="mt-2">Watch Trailer</p>
            </div>
            <div className="text-center">
              <a href={movieItem.download}>
                <i className="bi-box-arrow-down text-4xl text-stone-700"></i>
              </a>
              <p className="mt-3">Download</p>
            </div>
          </div>
        </div>

        <div className="px-8 py-10 bg-slate-700 text-gray-100">
          <h3 className="pb-3 font-bold text-lg">Benza says:</h3>
          <p>{movieItem.fullReview}</p>
        </div>
      </div>
    </Modal>
  );
};

export default MovieReview;
