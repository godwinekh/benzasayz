import React, { Fragment, useEffect } from "react";
import SearchForm from "../Layout/SearchForm";
import ReviewList from "./ReviewList";

const Reviews = (props) => {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  return (
    <Fragment>
      <SearchForm className="fixed top-16 left-0 right-0 py-8 bg-stone-400 lg:hidden" />
      <ReviewList />
    </Fragment>
  );
};

export default Reviews;