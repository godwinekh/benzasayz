import React, { Fragment, useState } from "react";
import MovieReview from "./MovieReview";
import MovieTrailer from "./MovieTrailer";

const MoviePreview = (props) => {
  const [movieModal, setMovieModal] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const toggleTrailerHandler = () => {
    setShowTrailer(prevState => !prevState);
  };

  const toggleSummaryHandler = () => {
    setShowSummary(prevState => !prevState);
  };

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
      <div onMouseEnter={toggleSummaryHandler} onMouseLeave={toggleSummaryHandler}
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
          {showSummary && <p className="py-5">{props.synopsis}...</p>}
          <div
            id="links"
            className="flex flex-row justify-between items-center text-stone-400"
          > 
            <div className="flex flex-row gap-3 items-center">
              <p className={`${ratingColor} px-2 py-1 font-bold text-lg`}>
                {props.rating}
              </p>
              <button onClick={toggleTrailerHandler}>
                <i className="bi-youtube text-3xl hover:text-red-800"></i>
              </button>
              <a href="/" alt={"get download link"}>
                <i className="bi-download text-xl"></i>
              </a>
            </div>
            <p
              className="capitalize text-md hover:text-yellow-500 hover:cursor-pointer"
              onClick={showReviewHandler}
            >
              <i className="bi-file-earmark-text-fill text-yellow-600 text-3xl"></i>
            </p>
          </div>
        </div>
        {showTrailer && <MovieTrailer onClose={toggleTrailerHandler} trailer={props.trailer} />}
      </div>

      {movieModal && <MovieReview onDismiss={closeReviewHandler} movieId={props.id} />}
    </Fragment>
  );
};

export default MoviePreview;
