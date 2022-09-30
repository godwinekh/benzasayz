import React, { Fragment, useState } from "react";
import MovieReview from "./MovieReview";

const MovieThumbnail = (props) => {
  const [movieModal, setMovieModal] = useState(false);

  const showReviewHandler = (event) => {
    setMovieModal(true);
  };

  const closeReviewHandler = () => {
    setMovieModal(false);
  };

  return (
    <Fragment>
      <div className="border border-gray-600 rounded-r-xl shadow-xl bg-gray-700 text-stone-300 mb-3">
        <img className="inline w-16 h-20" src={props.image} alt={props.title} style={{size: "contain"}} />
        <div className="inline-block align-middle px-5">
          <p className="capitalize text-lg hover:text-yellow-500 hover:cursor-pointer" onClick={showReviewHandler}>
            {props.title}
          </p>
          <p className="text-xs">{props.releaseDate}</p>
        </div>
      </div>

      {movieModal && <MovieReview onDismiss={closeReviewHandler} movieId={props.id} />}
    </Fragment>
  );
};

export default MovieThumbnail;
