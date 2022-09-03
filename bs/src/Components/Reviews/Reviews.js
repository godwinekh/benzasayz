import React, { useEffect } from "react";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import SearchForm from "../Sections/SearchForm";
import ReviewList from "./ReviewList";

const Reviews = (props) => {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  return (
    <main>
      <Header homeLink={props.homeLink} />
      <SearchForm className="fixed top-16 left-0 right-0 py-8 bg-stone-400" />
      <ReviewList />

      <Footer />
    </main>
  );
};

export default Reviews;