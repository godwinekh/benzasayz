import React from "react";
import MovieThumbnail from "../Movies/MovieThumbnail";
import Button from "../UI/Button";
import SubPanel from "./SubPanel";


const ReviewList = () => {
  return (
    <React.Fragment>
      <SubPanel />

      <section className="mt-48 bg-slate-900 py-12 px-5">
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />

        <div className="flex flex-row justify-between py-5 text-stone-300">
          <Button className="px-3 py-2 bg-gray-800"><i className="bi-caret-left-fill"></i> Prev</Button>
          <Button className="px-3 py-2 bg-gray-800">Next <i className="bi-caret-right-fill"></i></Button>
        </div>      
      </section>
    </React.Fragment>
  );
};

export default ReviewList;