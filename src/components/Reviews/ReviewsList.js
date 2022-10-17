import React, { useContext } from "react";
import MovieContext from "../../store/movie-context";
import MoviePreview from "../Movies/MoviePreview";
import Button from "../UI/Button";
import LoadingSpinner from "../UI/LoadingSpinner";
import SubPanel from "./SubPanel";

const ReviewsList = () => {
  const movieCtx = useContext(MovieContext);
  const { movies, isLoaded } = movieCtx;

  const previews = movies.map((movie) => (
    <MoviePreview
      className="text-gray-100 bg-image-full"
      key={movie.id}
      id={movie.id}
      title={movie.title}
      rating={movie.rating}
      style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
    />
  ));

  return (
    <React.Fragment>
      <SubPanel />

      <section className="mt-48 bg-slate-900 py-12 px-5 lg:mt-28">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {previews}
        </div>

        {!isLoaded && (
          <div className="flex justify-center my-14">
            <LoadingSpinner />
          </div>
        )}

        <div className="flex flex-row justify-between py-5 text-stone-300">
          <Button className="px-3 py-2 bg-gray-800">
            <i className="bi-caret-left-fill"></i> Prev
          </Button>
          <Button className="px-3 py-2 bg-gray-800">
            Next <i className="bi-caret-right-fill"></i>
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ReviewsList;
