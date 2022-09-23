import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation, { InlineNavigation } from "./Navigation";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  // manage toggler for hamburger menu across device widths
  const toggleNavigationHandler = () => {
    setShowNavigation((prevState) => !prevState);
  };

  return (
    <header className="bg-stone-400 bg-opacity-95 text-white shadow-md fixed top-0 right-0 left-0 z-20">
      <nav className="flex justify-between items-center">
        <div className="pl-5 py-4 lg:px-16">
          <Link
            to="/home"
            className="text-2xl font-extrabold text-gray-900 cursor-pointer"
          >
            Benza<span className="font-thin text-slate-900">sayz</span>
          </Link>
        </div>

        <div className="bg-gray-800 p-3 lg:grow">
          {/* For mobile devices, navigation access */}
          <button
            className="md:hidden"
            type="button"
            onClick={toggleNavigationHandler}
          >
            <i className="bi-list text-4xl "></i>
          </button>
          {showNavigation && <Navigation onDismiss={toggleNavigationHandler} />}

          {/* For large devices only, search bar */}
          <InlineNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
