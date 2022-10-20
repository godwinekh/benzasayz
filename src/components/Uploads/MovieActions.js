import { useDispatch } from "react-redux";
import { consoleActions } from "../../store/console/actions-slice";

const MovieActions = () => {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(consoleActions.showForm());
  };
  const editHandler = () => {
    dispatch(consoleActions.showForm("edit"));
  };
  const removeMovieHandler = () => {
    const validate = window.confirm("This action is permanent. Do you want to continue?");
    if (validate) {
      dispatch(consoleActions.removeMovieItem())
    } else {
      console.log("deletion canceled")
    }
  }

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
        onClick={removeMovieHandler}
        className="bg-slate-900 text-white px-7 py-2 hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default MovieActions;
