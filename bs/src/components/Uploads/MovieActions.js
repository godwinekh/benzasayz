import { useContext } from "react";
import ActionsContext from "../../store/actions-context";

const MovieActions = () => {
  const {showForm, removeMovie} = useContext(ActionsContext);

  const addHandler = () => {
    showForm("add")
  };
  const editHandler = () => {
    showForm("edit")
  };

  return (
    <div className="flex justify-center gap-2 pt-10">
      <button
        onClick={addHandler}
        className="bg-green-600 text-white px-7 py-2 hover:bg-green-800"
      >
        Add new movie
      </button>

      <button
        onClick={editHandler}
        className="bg-stone-500 text-white px-7 py-2 hover:bg-amber-500"
      >
        Edit
      </button>

      <button
        onClick={removeMovie}
        className="bg-slate-900 text-white px-7 py-2 hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default MovieActions;
