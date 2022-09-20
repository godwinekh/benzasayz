import React, { useContext } from "react";
import MovieContext from "../../store/movie-context";
import MovieThumbnail from "../Movies/MovieThumbnail";
import Button from "../UI/Button";
import SubPanel from "./SubPanel";

const ReviewsList = () => {
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  const previews = movies.map((movie) => (
    <MovieThumbnail
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.imagePath}
      releaseDate={movie.releaseDate}
    />
  ));

  return (
    <React.Fragment>
      <SubPanel />

      <section className="mt-48 bg-slate-900 py-12 px-5 lg:mt-28">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {previews}
        </div>

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
