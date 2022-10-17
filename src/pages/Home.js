import React, { Fragment } from "react";
import SearchForm from "../components/Layout/SearchForm";
import NewReviews from "../components/Home/NewReviews";
import Overview from "../components/Home/Overview";

const Home = () => {
  
  return (
    <Fragment>
      {/* Hidden for Large Devices */}
      <section className="mt-16">
        <div className="lg:hidden text-white">
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
