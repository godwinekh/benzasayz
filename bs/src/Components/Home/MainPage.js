import React from "react";
import styles from "./MainPage.module.css";
import MoviePreview from "../Movies/MoviePreview";
import SearchForm from "./SearchForm";
import Header from "../Sections/Header";
import NewReviews from "./NewReviews";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="mt-16">
        <div className="flex flex-col lg:flex-row text-white">
          <MoviePreview
            className={`sm:basis-full lg:basis-3/5 ${styles["ov-bg-image-full"]}`}
            title="Today's Pick: Deadpool"
            rating="7.5"
            snapshot="Some little synopsis about this movie that would encourage you to want to watch it."
            style={{ backgroundImage: "url(/Images/6366.jpg)" }}
          />

          {/* Hidden for and Large Devices */}
          <div className="basis-full lg:hidden mx-auto py-14 w-full text-center bg-gradient-to-b from-slate-900 to-gray-800">
            <p className="pb-5 text-2xl">Looking for something?</p>
            <SearchForm />
          </div>

          {/* Hidden for Mobile and Medium Devices */}
          <div
            className={`hidden lg:basis-2/5 lg:flex flex-row ${styles["no-padding"]}`}
          >
            <div
              className={`basis-1/2 ${styles["ov-bg-image-half"]}`}
              style={{ backgroundImage: "url(/Images/6366.jpg)" }}
            ></div>
            <div
              className={`basis-1/2 mt-0.5 ${styles["ov-bg-image-half"]}`}
              style={{ backgroundImage: "url(/Images/morbius.jpg)" }}
            ></div>
          </div>
        </div>
      </section>
      <NewReviews  className={`text-gray-100 ${styles["ov-bg-image-full"]}`} />
    </React.Fragment>
  );
};

export default MainPage;
