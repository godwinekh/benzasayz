import MovieThumbnail from "../Movies/MovieThumbnail";
import SectionHeader from "../Sections/SectionHeader";

const Watchlist = () => {
  return (
    <section className="bg-gradient-to-t from-gray-700 to-slate-900 py-12 -mt-1">
      <SectionHeader className="mb-10 text-3xl">Benza's Watchlist</SectionHeader>

      <div className="mt-8 px-5">
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
        <MovieThumbnail />
      </div>
    </section>
  );
};

export default Watchlist;