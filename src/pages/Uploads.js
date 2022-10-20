import MovieSideBar from "../components/Uploads/MovieSideBar";
import MovieEditables from "../components/Uploads/MovieEditables";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase-config.js";
import { ref, onValue } from "firebase/database";
import { consoleActions } from "../store/console/actions-slice";

const Uploads = () => {
  const dispatch = useDispatch();
  const pending = useSelector((state) => state.console.status.pending);
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();

  useEffect(() => {

    if (!uid) {
      navigate("/console/admin/authenticate-user");
    }

    const extractedMovies = ref(db, "/movies");
    let timeout;
    
    onValue(extractedMovies, (snapshot) => {
      const data = snapshot.val();
      if (!pending) {
        timeout = setTimeout(() => {
          dispatch(consoleActions.loadMovies(data));
        }, 5000);
      }
    });

    return () => clearTimeout(timeout);
  }, [navigate, uid, dispatch, pending]);


  return (
    <Fragment>
      <div className="flex flex-row mt-16 pb-2 relative">
        <MovieSideBar className="basis-1/3" />
        <MovieEditables className="md:basis-2/3" />
      </div>
    </Fragment>
  );
};

export default Uploads;
