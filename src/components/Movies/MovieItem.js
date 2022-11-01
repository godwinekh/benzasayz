import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieItem = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showReviewHandler = (event) => {
    navigate(`${location.pathname}/movies/${props.id}`)
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
      <div className={`${props.className} relative hover:scale-105`} style={props.style} onClick={showReviewHandler}>
        <h2 className="font-bold text-lg text-white text-center py-2 hover:text-yellow-500 hover:cursor-pointer" onClick={showReviewHandler}>
          {props.title.toUpperCase()}
        </h2>

        <div className={`container p-5 bg-gradient-to-b from-transparent to-slate-900 absolute -bottom-1`}>
          <div id="links" className="flex flex-row justify-between items-center text-stone-400"> 
            <p className={`${ratingColor} px-2 py-1 font-bold text-lg`}>
              {props.rating.toFixed(1)}
            </p>

            <button className="capitalize text-md text-3xl text-amber-500 hover:text-yellow-400 hover:cursor-pointer" onClick={showReviewHandler}>
              <i className="bi-file-earmark-text-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieItem;
