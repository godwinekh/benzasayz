import { Fragment, useState } from "react";
import MovieSideBar from "../components/Uploads/MovieSideBar";
import MovieEditables from "../components/Uploads/MovieEditables";

const Uploads = () => {
  const [activeMovie, setActiveMovie] = useState();

  const showMovieInfoHandler = (movie) => {
    setActiveMovie(movie);
  };

  return (
    <Fragment>
      <div className="flex flex-row mt-16 pb-2">
        <MovieSideBar className="basis-1/3" onShowMovie={showMovieInfoHandler} />
        <MovieEditables className="basis-2/3" movie={activeMovie} />
      </div>
    </Fragment>
  );
};

export default Uploads;
