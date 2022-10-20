import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../../store/movie-context";
import MoviePreview from "../Movies/MoviePreview";
import Button from "../UI/Button";
import LoadingSpinner from "../UI/LoadingSpinner";
import SubPanel from "./SubPanel";

const ReviewsList = () => {
  const [counter, setCounter] = useState(0);
  const [quantityIndex, setQuantityIndex] = useState(18);
  const [previews, setPreviews] = useState(0);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const movieCtx = useContext(MovieContext);
  const { movies, isLoaded } = movieCtx;

  useEffect(() => {
    setPreviews(
      movies
        .slice(counter, quantityIndex)
        .map((movie) => (
          <MoviePreview
            className="text-gray-20 bg-image-full"
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            style={{ backgroundImage: `url(${movie.imageUrl.imagePrt})` }}
          />
        ))
    );

    if (movies.length === quantityIndex || movies.length < quantityIndex) {
      setLast(true);
    } else {
      setLast(false);
    }

    if (counter !== 0) {
      setFirst(false);
    } else {
      setFirst(true);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [counter, quantityIndex, movies]);

  const prevHandler = () => {
    setCounter(counter - 18);
    setQuantityIndex(quantityIndex - 18);
  };

  const nextHandler = () => {
    setCounter(counter + 18);
    setQuantityIndex(quantityIndex + 18);
  };

  return (
    <React.Fragment>
      <SubPanel total={movies.length} upper={quantityIndex} lower={counter} />

      <section className="mt-48 bg-slate-900 py-12 px-5 lg:mt-28">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6 text-white">
          {previews}
        </div>

        {!isLoaded && (
          <div className="flex justify-center my-14">
            <LoadingSpinner />
          </div>
        )}

        <div className="flex flex-row justify-between py-5 text-stone-300">
          {!first && (
            <Button className="px-3 py-2 bg-gray-800" onClick={prevHandler}>
              <i className="bi-caret-left-fill"></i> Prev
            </Button>
          )}
          {!last && (
            <Button className="px-3 py-2 bg-gray-800" onClick={nextHandler}>
              Next <i className="bi-caret-right-fill"></i>
            </Button>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ReviewsList;
