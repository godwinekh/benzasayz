import React, { Fragment, useState } from "react";
import MoviePreview from "../Movies/MoviePreview";
import SearchForm from "../Layout/SearchForm";
import NewReviews from "./NewReviews";
import Watchlist from "./Watchlist";
import MovieReview from "../Movies/MovieReview";
import styles from "./Home.module.css";
import Overview from "./Overview";

const Home = (props) => {
  const [movieReviewModal, setMovieReviewModal] = useState(false);

  const showMovieReviewHandler = (event) => {
    event.preventDefault();
    setMovieReviewModal(true);
  };

  const dismissMovieReviewHandler = () => {
    setMovieReviewModal(false);
  };

  return (
    <Fragment>
      {/* Hidden for Large Devices */}
      <section className="mt-16">
        <div className="lg:hidden text-white">
          <MoviePreview
            className={`w-full ${styles["bg-image-full"]}`}
            title="Today's Pick: Deadpool"
            rating="7.5"
            snapshot="Some little synopsis about this movie that would encourage you to want to watch it."
            style={{ backgroundImage: "url(/Images/6366.jpg)" }}
            onClick={showMovieReviewHandler}
          />

          <div className="mx-auto py-14 w-full text-center bg-gradient-to-b from-slate-900 to-gray-800">
            <p className="pb-5 text-2xl">Looking for something?</p>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Hidden for Mobile and Medium Devices */}
      <section className="mt-16">
        <Overview
          styleImg={styles["bg-image-full"]}
          onClick={showMovieReviewHandler}
        />
      </section>
      <NewReviews
        className={`text-gray-100 ${styles["bg-image-full"]}`}
        reviewsLink={props.reviewsLink}
      />
      <Watchlist />

      {movieReviewModal && (
        <MovieReview onDismiss={dismissMovieReviewHandler} />
      )}
    </Fragment>
  );
};

export default Home;
