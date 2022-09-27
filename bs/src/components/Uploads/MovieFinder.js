import { useContext } from "react";
import ActionsContext from "../../store/actions-context";

const MovieFinder = () => {
  const { findMovie } = useContext(ActionsContext);

  const searchDbHandler = (event) => {
    const keywords = event.target.value;
    findMovie(keywords);
  };

  return (
    <div className="text-sm py-7">
      <form className="flex justify-center">
        <input
          className="px-2 bg-stone-100 w-3/4 rounded-md outline-1 outline  outline-stone-300 hover:outline-none focus:outline-none active:outline-none"
          type="text"
          placeholder="Search database"
          onChange={searchDbHandler}
        />
        <span className="inline-block px-3 font-bold text-xl text-stone-400">
          <i className="bi-search"></i>
        </span>
      </form>
    </div>
  );
};

export default MovieFinder;
