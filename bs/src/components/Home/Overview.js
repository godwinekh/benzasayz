import React from "react";
import { Fragment } from "react";
import MoviePreview from "../Movies/MoviePreview";

const Overview = (props) => {
  return (
    <Fragment>
      <h2 className="hidden lg:block pt-14 pb-10 text-center text-4xl font-extrabold bg-slate-900 text-stone-300">Top #3 Favourites</h2>
      <div className="hidden lg:flex flex-row justify-center items-center pb-28 px-5 w-full text-white bg-gradient-to-b from-slate-900 to-gray-800">
        <MoviePreview
          className={`basis-1/4 shadow-xl shadow-slate-900 hover:scale-105 ${props.styleImg}`}
          title="Deadpool"
          rating="4.0"
          synopsis="The movie was just there. Nothing really special or so fun about it."
          style={{ backgroundImage: "url(/Images/6366.jpg)", height: "28em" }}
        />
        
        <MoviePreview
          className={`basis-2/4 shadow-xl shadow-slate-900 hover:scale-105 z-10 ${props.styleImg}`}
          title="Deadpool"
          rating="4.0"
          synopsis="The movie was just there. Nothing really special or so fun about it."
          style={{ backgroundImage: "url(/Images/6366.jpg)", height: "32em" }}
          onClick={props.onClick}
        />

        <MoviePreview
          className={`basis-1/4 shadow-xl shadow-slate-900 hover:scale-105 ${props.styleImg}`}
          title="Deadpool"
          rating="4.0"
          synopsis="The movie was just there. Nothing really special or so fun about it."
          style={{ backgroundImage: "url(/Images/6366.jpg)", height: "28em" }}
        />
      </div>
    </Fragment>
  );
};

export default Overview;
