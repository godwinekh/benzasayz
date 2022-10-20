import { useDispatch } from "react-redux";
import { consoleActions } from "../../store/console/actions-slice";

const MovieFinder = () => {
  const dispatch = useDispatch();

  const searchMoviesHandler = (event) => {
    const keywords = event.target.value;
    dispatch(consoleActions.findMovieItem(keywords));
  };

  const reloadMoviesHandler = () => {
    dispatch(consoleActions.loadMovies());
  };

  return (
    <div className="text-sm py-7">
      <form className="flex justify-center">
        <input
          className="px-2 bg-stone-100 w-3/4 rounded-md outline-1 outline  outline-stone-300 hover:outline-none focus:outline-none active:outline-none"
          type="text"
          placeholder="Search database"
          onChange={searchMoviesHandler}
        />
        <button type="button" onClick={reloadMoviesHandler} className="inline-block px-3 rounded-full font-bold text-xl text-stone-400 hover:text-black">
          <i className="bi-arrow-clockwise"></i>
        </button>
      </form>
    </div>
  );
};

export default MovieFinder;
