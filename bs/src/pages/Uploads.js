import MovieSideBar from "../components/Uploads/MovieSideBar";
import MovieEditables from "../components/Uploads/MovieEditables";
import ActionsProvider from "../store/ActionsProvider";

const Uploads = () => {
  
  return (
    <ActionsProvider>
      <div className="flex flex-row mt-16 pb-2">
        <MovieSideBar className="basis-1/3" />
        <MovieEditables className="basis-2/3" />
      </div>
    </ActionsProvider>
  );
};

export default Uploads;
