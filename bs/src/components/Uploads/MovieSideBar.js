import MovieDatabase from "./MovieDatabase";
import MovieFinder from "./MovieFinder";

const MovieSideBar = (props) => {
  return (
    <div className={`${props.className} bg-stone-100 overflow-scroll`} style={{height: 44+"rem"}}>
      {/* <div className="px-10 pt-4 pb-2 bg-stone-200">
        <ul className="flex gap-5 pt-2">
          <li>
            <button>move-to</button>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </div> */}
      <MovieFinder />
      <MovieDatabase />
    </div>
  );
};

export default MovieSideBar;
