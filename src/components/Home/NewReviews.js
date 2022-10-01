import React, { useContext } from "react";
import MoviePreview from "../Movies/MoviePreview";
import SectionHeader from "../Layout/SectionHeader";
import MovieContext from "../../store/movie-context";
import { Link } from "react-router-dom";

const NewReviews = (props) => {
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;


  const contents = movies.map((movie) => (
    <MoviePreview
      className="text-gray-100 bg-image-full"
      key={movie.key}
      id={movie.id}
      title={movie.title.toUpperCase()}
      rating={movie.rating}
      trailer={movie.trailer}
      synopsis={movie.synopsis.split(".")[0]}
      style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
    />
  ));

  return (
    <section className="pt-8 bg-gray-700 -mt-1 relative">
      <SectionHeader className="mb-8 text-3xl">New Reviews</SectionHeader>
      <div className="md:grid gap-7 md:grid-cols-2 lg:grid-cols-5 md:mb-10 md:px-5">
        {contents}
      </div>

      <div className="bg-slate-900 pt-10 p-5 text-center">
        <Link to="/reviews" className="px-3 py-2 text-yellow-500 rounded-lg">
          More Reviews <i className="bi-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default NewReviews;
