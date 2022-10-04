import React, { Fragment, useContext } from "react";
import MoviePreview from "../components/Movies/MoviePreview";
import SearchForm from "../components/Layout/SearchForm";
import NewReviews from "../components/Home/NewReviews";
import Overview from "../components/Home/Overview";
import MovieContext from "../store/movie-context";

const Home = (props) => {
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  const filteredMovies = movies.filter((movie) => movie.rating > 7.5);

  const contents = filteredMovies.map((movie) => (
    <MoviePreview
      key={movie.key}
      id={movie.key}
      className={`w-full bg-image-full`}
      title={movie.title}
      rating={movie.rating}
      synopsis={movie.synopsis}
      style={{
        backgroundImage: `url(${movie.imageUrl.imagePrt})`,
      }}
    />
  ));

  const totalIndex = contents.length - 1;
  const lastItem = contents.splice(0, totalIndex);

  return (
    <Fragment>
      {/* Hidden for Large Devices */}
      <section className="mt-16">
        <div className="lg:hidden text-white">
          {contents}

          <div className="mx-auto py-14 w-full text-center bg-gradient-to-b from-slate-900 to-gray-800">
            <p className="pb-5 text-2xl">Looking for something?</p>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Hidden for Mobile and Medium Devices */}
      <section className="lg:mt-16">
        <Overview />
      </section>
      <NewReviews />
    </Fragment>
  );
};

export default Home;
