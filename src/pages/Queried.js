import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchForm from "../components/Layout/SearchForm";
import SectionHeader from "../components/Layout/SectionHeader";
import useFind from "../hooks/use-find";

const Queried = (props) => {
  const [searchResults, setSearchResults] = useState({});
  const { exactMatch, relatedMatches } = useFind();
  
  const params = useParams();
  const { movieTitle } = params;

  useEffect(() => {
    if (!movieTitle) {
      return;
    };
    const exact = exactMatch(movieTitle);
    const related = relatedMatches(movieTitle);

    setSearchResults({ exactMovie: exact, relatedMovies: related });
  }, [movieTitle, exactMatch, relatedMatches]);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);


  return (
    <Fragment>
      <SearchForm className="fixed top-16 left-0 right-0 py-8 bg-stone-400 z-20 lg:hidden" />
      <section className="mt-36 bg-slate-900 py-12 px-5 lg:mt-28">
        <SectionHeader>Exact Movie</SectionHeader>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5 pt-5 pb-10 text-stone-300">
          {searchResults.exactMovie}
        </div>

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
