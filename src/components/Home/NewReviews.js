import React, { useContext } from "react";
import MoviePreview from "../Movies/MoviePreview";
import SectionHeader from "../Layout/SectionHeader";
import MovieContext from "../../store/movie-context";
import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewReviews = (props) => {
  const movieCtx = useContext(MovieContext);
  const { movies, isLoaded } = movieCtx;


  const contents = movies.map((movie) => (
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
    <section className="pt-8 bg-gray-700 -mt-1 relative">
      <SectionHeader className="mb-8 text-3xl">Top Reviews</SectionHeader>
      <div className="md:grid gap-7 md:grid-cols-2 lg:grid-cols-5 md:mb-10 md:px-5">
        {contents}
      </div>

      {isLoaded && (
          <div className="flex justify-center my-14">
            <LoadingSpinner />
          </div>
        )}

      <div className="bg-slate-900 py-14 text-center">
        <Link to="/reviews" className="py-4 px-10 text-stone-200 bg-gray-700 rounded-lg">
          More Reviews <i className="bi-arrow-right ml-5"></i>
        </Link>
      </div>
    </section>
  );
};

export default NewReviews;
