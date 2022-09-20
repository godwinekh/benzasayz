import React, { useContext } from "react";
import MovieThumbnail from "../Movies/MovieThumbnail";
import SectionHeader from "../Layout/SectionHeader";
import MovieContext from "../../store/movie-context";

const Watchlist = () => {
  const movieCtx = useContext(MovieContext);
  const { movies } = movieCtx;

  const contents = movies.map((movie) => (
    <MovieThumbnail
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.imagePath}
      releaseDate={movie.releaseDate}
    />
  ));

  return (
    <section className="bg-gradient-to-t from-gray-700 to-slate-900 py-12 -mt-1">
      <div className="lg:grid gap-5 grid-cols-3">
        <div className="lg:px-5" id="grid-0">
          <SectionHeader className="mb-10 text-3xl">
            August Watchlist
          </SectionHeader>
          <div className="my-8 px-5 md:pr-60 lg:pr-0">{contents}</div>
        </div>

        <div className="lg:px-5" id="grid-1">
          <SectionHeader className="mb-10 text-3xl">
            Coming This September
          </SectionHeader>
          <div className="my-8 px-5 md:pr-60 lg:pr-0">{contents}</div>
        </div>

        <div className="lg:px-5" id="grid-2">
          <SectionHeader className="mb-10 text-3xl">
            2022 Movies Playlist
          </SectionHeader>
          <div className="my-8 px-5 md:pr-60 lg:pr-0">{contents}</div>
        </div>
      </div>
    </section>
  );
};

export default Watchlist;
