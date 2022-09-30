import { Fragment, useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal";
import MovieDatabase from "./MovieDatabase";
import MovieFinder from "./MovieFinder";

const MovieSideBar = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const {logout} = useContext(AuthContext);

  const toggleSidebarHandler = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div
        className={`${props.className} hidden md:block bg-stone-100 overflow-scroll`}
        style={{ height: 44 + "rem" }}
      >
        <MovieFinder />
        <MovieDatabase />
      </div>

      {/* For small screens */}
      <div className="md:hidden absolute z-10 top-2 left-3">
        <button className="text-stone-600" onClick={toggleSidebarHandler}>
          <i className="bi-list text-xl"></i>
        </button>
      </div>

      <div className="md:hidden absolute z-10 top-2 right-3">
        <button className="text-red-700" onClick={logout}>
          <i className="bi-box-arrow-right text-xl"></i>
        </button>
      </div>

      {showSidebar && (
        <Modal onDismiss={toggleSidebarHandler}>
          <div className="bg-stone-200">
            <MovieFinder />
            <MovieDatabase />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default MovieSideBar;
