import React, { Fragment, useState } from "react";
import MovieReview from "./MovieReview";

const MoviePreview = (props) => {
  const [movieModal, setMovieModal] = useState(false);

  const showReviewHandler = (event) => {
    setMovieModal(true);
  };

  const closeReviewHandler = () => {
    setMovieModal(false);
  };

  let ratingColor;

  if (props.rating < 4.5) {
    ratingColor = "bg-red-500 text-gray-100";
  } else if (props.rating < 7) {
    ratingColor = "bg-yellow-500 text-gray-900";
  } else if (props.rating >= 7) {
    ratingColor = "bg-lime-700 text-gray-100";
  }

  return (
    <Fragment>
      <div
        className={`${props.className} relative hover:scale-105`}
        style={props.style}
      >
        <div
          className={`container p-5 bg-gradient-to-b from-transparent to-slate-900 absolute -bottom-1`}
        >
          <h2
            className="font-bold text-2xl hover:text-yellow-500 hover:cursor-pointer"
            onClick={showReviewHandler}
          >
            {props.title}
          </h2>
          <p className="py-5">{props.synopsis}</p>
          <div
            id="links"
            className="flex flex-row gap-3 items-center text-stone-400"
          >
            <p className={`${ratingColor} px-2 py-1 font-bold text-lg`}>
              {props.rating}
            </p>
            <a href="/" alt={"trailer on youtube"}>
              <i className="bi-youtube text-3xl hover:text-red-800"></i>
            </a>
            <a href="/" alt={"get download link"}>
              <i className="bi-download text-xl"></i>
            </a>
            <p
              className="capitalize text-md hover:text-yellow-500 hover:cursor-pointer"
              onClick={showReviewHandler}
            >
              bs review
            </p>
          </div>
        </div>
      </div>

      {movieModal && <MovieReview onDismiss={closeReviewHandler} movieId={props.id} />}
    </Fragment>
  );
};

export default MoviePreview;
