import MovieSideBar from "../components/Uploads/MovieSideBar";
import MovieEditables from "../components/Uploads/MovieEditables";
import ActionsProvider from "../store/ActionsProvider";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { Navigate } from "react-router-dom";

const Uploads = () => {
  const { user } = useContext(AuthContext);

  const uid = localStorage.getItem("uid");

  if (!uid) {
    return <Navigate to="/console/admin/authenticate-user" />;
  };
  
  return (
    <ActionsProvider>
      <div className="flex flex-row mt-16 pb-2 relative">
        <MovieSideBar className="basis-1/3" />
        <MovieEditables className="basis-2/3" />
      </div>
    </ActionsProvider>
  );
};

export default Uploads;
