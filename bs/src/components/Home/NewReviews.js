import React, { useContext } from "react";
import MoviePreview from "../Movies/MoviePreview";
import SectionHeader from "../Layout/SectionHeader";
import Button from "../UI/Button";
import MovieContext from "../../store/movie-context";

const NewReviews = (props) => {
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  const contents = movies.map((movie) => (
    <MoviePreview
      className={props.className}
      key={movie.id}
      title={movie.title}
      rating={movie.rating}
      synopsis={movie.synopsis}
      style={{ backgroundImage: `url(${movie.imagePath})` }}
    />
  ));

  return (
    <section className="pt-8 bg-gray-700 -mt-1">
      <SectionHeader className="mb-8 text-3xl">New Reviews</SectionHeader>
      <div className="md:grid gap-7 md:grid-cols-2 lg:grid-cols-5 md:mb-10 md:px-5">
        {contents}
      </div>

      <div className="bg-slate-900 pt-10 p-5 text-center">
        <Button
          onClick={props.reviewsLink}
          className="px-3 py-2 text-yellow-500 rounded-lg"
        >
          More Reviews <i className="bi-arrow-right"></i>
        </Button>
      </div>
    </section>
  );
};

export default NewReviews;
