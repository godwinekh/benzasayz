import { useContext, useState } from "react";
import ActionsContext from "../../store/actions-context";

const Notification = () => {
  const { status } = useContext(ActionsContext);
  const { message } = status;
  const [visible, setVisible] = useState(true);
  let messagetextColor;

  if (message.includes('Success')) {
    messagetextColor = "text-lime-700";
  };
  if (message.includes('Failed')) {
    messagetextColor = "text-red-700";
  };

  const closeNotificationHandler = () => {
    setVisible(false);
  };

  if (visible) {
    return (
      <div className="absolute top-7 right-5 w-full md:w-1/2 lg:w-1/2 z-20 bg-stone-100">
        <div className={`flex flex-row justify-between gap-4 py-2 px-4 shadow-md ${messagetextColor}`}>
          <p className="grow">{message}</p>
          <button type="button" className="" onClick={closeNotificationHandler}>
            <i className="bi-x-circle"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default Notification;
