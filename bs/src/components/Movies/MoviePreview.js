import React from "react";

const MoviePreview = (props) => {

  let ratingColor;

  if (props.rating < 4.5) {
    ratingColor = 'bg-red-500 text-gray-100';
  } else if (props.rating < 7) {
    ratingColor = 'bg-yellow-500 text-gray-900';
  } else if (props.rating >= 7) {
    ratingColor = 'bg-lime-700 text-gray-100';
  }

  return (
    <div className={`${props.className} relative`} style={props.style}>
      <div className={`container p-5 bg-gradient-to-b from-transparent to-slate-900 absolute -bottom-1`}>
        <h2 className="font-bold text-2xl" onClick={props.onClick}>{props.title}</h2>
        <p className="py-5">{props.synopsis}</p>
        <div id="links" className="flex flex-row gap-4 items-center text-stone-400">
          <p className={`${ratingColor} px-2 py-1 font-bold text-lg`}>{props.rating}</p>
          <a href="/" alt={'trailer on youtube'}><i className="bi-youtube text-3xl"></i></a>
          <a href="/" alt={'get download link'}><i className="bi-download text-xl"></i></a>
          <a href="/" alt={"read review button"} className="uppercase text-sm" onClick={props.onClick}>read full review</a>
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;