import React, { Fragment, useState } from "react";
import MovieReview from "./MovieReview";

const MovieItem = (props) => {
  const [movieModal, setMovieModal] = useState(false);

  const showReviewHandler = (event) => {
    setMovieModal(true);
  };

  const closeReviewHandler = () => {
    setMovieModal(false);
  };

  return (
    <Fragment>
      <div className="border border-gray-600 shadow-xl bg-gray-700 text-stone-300">
        <img className="inline h-24" src={props.image} alt={props.title} />
        <div className="inline-block align-middle px-5">
          <p className="capitalize text-lg hover:text-yellow-500 hover:cursor-pointer" onClick={showReviewHandler}>
            {props.title}
          </p>
          <p className="text-sm">{props.synopsis}</p>
        </div>
      </div>

      {movieModal && <MovieReview onDismiss={closeReviewHandler} movieId={props.id} />}
    </Fragment>
  );
};

export default MovieItem;
