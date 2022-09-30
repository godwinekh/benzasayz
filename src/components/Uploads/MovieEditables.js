import { Fragment, useContext } from "react";
import ActionsContext from "../../store/actions-context";
import MovieDataForm from "./MovieDataForm";
import MovieInfo from "./MovieInfo";

const MovieEditables = (props) => {
  const { showInfo, activeMovie } = useContext(ActionsContext);

  const header = (
    <div className="text-center pb-4 text-xl font-bold text-gray-700">
      <h2>Add New Movie</h2>
    </div>
  );

  const isActive = activeMovie ? true : false;

  return (
    <div className={props.className}>
      <div className="py-8 relative">
        {showInfo && isActive && <MovieInfo />}
        {!showInfo && (
          <Fragment>
            {header}
            <MovieDataForm />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default MovieEditables;
