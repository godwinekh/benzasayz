import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchForm from "../components/Layout/SearchForm";
import SectionHeader from "../components/Layout/SectionHeader";
import MoviePreview from "../components/Movies/MoviePreview";
import useFind from "../hooks/use-find";

const Queried = (props) => {
  const [searchResults, setSearchResults] = useState({
    exactMovie: null,
    relatedMovies: null,
  });
  const { exactMatch, relatedMatches } = useFind();

  const params = useParams();
  const { movieTitle } = params;

  useEffect(() => {
    if (!movieTitle) {
      return;
    }
    const exact = exactMatch(movieTitle);
    const related = relatedMatches(movieTitle);

    // When match is not found
    if (!exact) {
      const content = (
        <div className="pt-5 pb-10 text-stone-300">
          <p className="mb-4">Sorry, we found no reviews for {movieTitle}.</p>{" "}
          <p>
            You can browse through our archives for other interesting reviews or
            try a different search.
          </p>
        </div>
      );
      setSearchResults((prevState) => {
        return { ...prevState, exactMovie: content };
      });
    }

    // When match is found
    if (exact) {
      const match = exact.map((movie) => (
        <MoviePreview
          className="text-gray-100 bg-image-full"
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
        />
      ));
      const content = (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5 pt-5 pb-10 text-stone-300">
          {match}
        </div>
      );
      setSearchResults((prevState) => {
        return { ...prevState, exactMovie: content };
      });
    }

    // Output some related movies regardless of whether match is found or not
    if (related) {
      const movies = related.map((movie) => (
        <MoviePreview
          className="text-gray-100 bg-image-full"
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
        />
      ));
      setSearchResults((prevState) => {
        return { ...prevState, relatedMovies: movies };
      });
    }
  }, [movieTitle, exactMatch, relatedMatches]);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Fragment>
      <SearchForm className="fixed top-16 left-0 right-0 py-8 bg-stone-400 z-20 lg:hidden" />
      <section className="mt-36 bg-slate-900 py-12 px-5 lg:mt-16">
        <SectionHeader>Exact Movie</SectionHeader>
        {searchResults.exactMovie}

        <SectionHeader>Related Movies</SectionHeader>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5 pt-5 pb-10 text-stone-300">
          {searchResults.relatedMovies}
        </div>

        <Link to="/reviews" className="px-3 py-2 bg-gray-800 text-stone-300">
          Browse all reviews
        </Link>
      </section>
    </Fragment>
  );
};

export default Queried;
