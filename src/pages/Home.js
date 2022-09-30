import React, { Fragment } from "react";
import MoviePreview from "../components/Movies/MoviePreview";
import SearchForm from "../components/Layout/SearchForm";
import NewReviews from "../components/Home/NewReviews";
import Watchlist from "../components/Home/Watchlist";
import Overview from "../components/Home/Overview";

const Home = (props) => {
  
  return (
    <Fragment>
      {/* Hidden for Large Devices */}
      <section className="mt-16">
        <div className="lg:hidden text-white">
          <MoviePreview
            className="w-full bg-image-full"
            id="m4"
            title="Today's Pick: Deadpool"
            rating="7.5"
            description="Some little synopsis about this movie that would encourage you to want to watch it."
            style={{ backgroundImage: "url(/Images/6366.jpg)" }}
          />

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
      <NewReviews
      />
      <Watchlist />
    </Fragment>
  );
};

export default Home;
