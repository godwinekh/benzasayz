import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const searchMoviesHandler = (e) => {
    e.preventDefault();

    const movieTitle = inputRef.current.value.trim();
    navigate(`/reviews/search/${movieTitle}`);
  };

  return (
    <div className={props.className}>
      <form className="text-white flex justify-center" onSubmit={searchMoviesHandler}>
        <input
          ref={inputRef}
          className="p-2 bg-gray-700 md:w-3/4 hover:outline-none focus:outline-none active:outline-none"
          type="text"
          placeholder="What movie are you looking for?"
        />
        <button className="inline-block py-2 px-3 bg-slate-900 font-bold">
          <i className="bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;