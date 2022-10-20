import { Fragment, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal";
import SearchForm from "./SearchForm";
import SectionHeader from "./SectionHeader";

const Navigation = (props) => {
  return (
    <Modal onDismiss={props.onDismiss}>
      <div className="bg-stone-300 p-5 h-1/2">
        <div className="py-3 border-b border-stone-400">
          <NavLink
            to="/home"
            className={(navItem) =>
              navItem.isActive
                ? "font-bold bi-caret-right-fill text-yellow-500"
                : ""
            }
            onClick={props.onDismiss}
          >
            <span className="pl-1 text-black">Home</span>
          </NavLink>
        </div>

        <div className="py-3 border-b border-stone-400">
          <NavLink
            to="/reviews"
            className={(navItem) =>
              navItem.isActive
                ? "font-bold bi-caret-right-fill text-yellow-500"
                : ""
            }
            onClick={props.onDismiss}
          >
            <span className="pl-1 text-black">Browse all reviews</span>
          </NavLink>
        </div>

        <div className="text-3xl">
          <SectionHeader className="lg:hidden text-black text-xl my-5">
            connect on social media
          </SectionHeader>
          <div className="flex flex-row gap-5">
            <a
              href="https://www.instagram.com/benzasayz/"
              target="_blank"
              rel="noreferrer"
              alt="Instagram"
            >
              <i className="bi-instagram"></i>
            </a>
            <a
              href="https://chat.whatsapp.com/G0EK5XFPNbf6eC48sjezkA"
              target="_blank"
              rel="noreferrer"
              alt="Whatsapp"
            >
              <i className="bi-whatsapp"></i>
            </a>
            <a
              href="https://t.me/bsmovielinks"
              target="_blank"
              rel="noreferrer"
              alt="Telegram"
            >
              <i className="bi-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const InlineNavigation = () => {
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  // extract location and limit the display of some elements on the upload console.
  const url = location.pathname;
  const isUpload =
    url === "/console/uploads" || url === "/console/admin/authenticate-user";
  const isUploadLogout = url === "/console/uploads";

  return (
    <ul
      className={`hidden md:flex flex-row gap-10 items-center py-1.5 ${
        isUpload ? "justify-between px-10" : "justify-evenly"
      }`}
    >
      {!isUpload && (
        <li className="md:hidden lg:inline-block lg:grow ">
          <SearchForm />
        </li>
      )}

      {/* Displays for all urls */}
      <li className="md:pl-10 lg:px-0">
        <NavLink
          to="/home"
          className={(navItem) =>
            navItem.isActive ? "font-bold text-yellow-500" : ""
          }
        >
          Home
        </NavLink>
      </li>

      {!isUpload && (
        <Fragment>
          <li>
            <NavLink
              to="/reviews"
              className={(navItem) =>
                navItem.isActive ? "font-bold text-yellow-500" : ""
              }
            >
              Browse all reviews
            </NavLink>
          </li>
          <li className="px-7 text-3xl">
            <div>
              <a
                href="https://www.instagram.com/benzasayz/"
                target="_blank"
                rel="noreferrer"
                alt={"Instagram"}
              >
                <i className="bi-instagram"></i>
              </a>
            </div>
          </li>
        </Fragment>
      )}

      {/* Displays for only the upload url */}
      {isUploadLogout && (
        <li className="md:pl-10 lg:px-0 text-2xl">
          <button onClick={logout} className="hover:text-yellow-500">
            <i className="bi-box-arrow-right"></i>
          </button>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
