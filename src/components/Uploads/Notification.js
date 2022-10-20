import { useSelector } from "react-redux";

const Notification = (props) => {
  const message = useSelector(state => state.console.status.message);

  const closeNotificationHandler = () => {
    props.onClose();
  };

  return (
    <div className="absolute top-7 right-5 w-full md:w-1/2 lg:w-1/2 z-20 bg-stone-100">
      <div className="flex flex-row justify-between gap-4 py-2 px-4 shadow-md">
        <p className="grow text-gray-800">{message}</p>
        <button type="button" className="" onClick={closeNotificationHandler}>
          <i className="bi-x-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Notification;
