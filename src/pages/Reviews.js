import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchForm from "../components/Layout/SearchForm";
import ReviewList from "../components/Reviews/ReviewsList";


const Reviews = () => {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Fragment>
      <SearchForm className="fixed top-16 left-0 right-0 py-8 bg-stone-400 z-20 lg:hidden" />
      <ReviewList />
      <Outlet />
    </Fragment>
  );
};

export default Reviews;
