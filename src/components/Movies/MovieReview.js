import React, { Fragment, useContext } from "react";
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
        <img className="" src={movieItem.imageUrl.imageLsc} alt={""} />

        <div className="flex flex-row justify-between font-bold text-xl p-3">
          <h3 className="capitalize text-lg">{movieItem.title}</h3>
          <p className="text-amber-500">
            <i className="bi-star mr-1"></i> {movieItem.rating.toFixed(1)}
          </p>
        </div>

        <div className="px-5 py-3 bg-gray-100 text-stone-700">
          <div className="leading-relaxed py-5">
            <p>{movieItem.synopsis}</p>
          </div>

          <div className="leading-relaxed capitalize py-3">
            <p>
              <b>release date:</b> {movieItem.releaseDate} <span></span>
            </p>
            <p>
              <b>genre:</b> {movieItem.genre}
            </p>
            <p className="leading-5">
              <b>starring:</b> {movieItem.cast}
            </p>
          </div>

          <div className="py-14">
            <iframe
              className="w-full h-48 md:h-80"
              src={movieItem.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-row gap-5 justify-evenly pb-8 items-end">
            <div className="text-center">
              {movieItem.download ? (
                <Fragment>
                  <a
                    href={movieItem.download}
                    className="disabled:cursor-not-allowed disabled:text-gray-400"
                  >
                    <i className="bi-box-arrow-down text-4xl text-stone-700"></i>
                  </a>
                  <p className="mt-3">Download</p>
                </Fragment>
              ) : (
                <p>
                  No download link is available yet for this movie. You can wait
                  a little longer if the movie is not released yet or is a
                  cinema-release movie. Otherwise you can request a download by
                  clicking <a href="https://chat.whatsapp.com/G0EK5XFPNbf6eC48sjezkA" className="text-blue-700">here</a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="px-8 py-10 bg-slate-700 text-gray-100">
          <h3 className="pb-3 font-bold text-lg">Benza says:</h3>
          <p>{movieItem.review}</p>
        </div>
      </div>
    </Modal>
  );
};

export default MovieReview;
