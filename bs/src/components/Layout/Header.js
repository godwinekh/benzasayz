import React from "react";
import SearchForm from "./SearchForm";

const Header = (props) => {
  return (
    <header className="bg-stone-400 bg-opacity-95 text-white shadow-md fixed top-0 right-0 left-0 z-20">
      <nav className="flex justify-between items-center">
        <div className="pl-5 py-4 lg:px-16">
          <h2
            className="text-2xl font-extrabold text-gray-900 cursor-pointer"
            onClick={props.homeLink}
          >
            Benza<span className="font-thin text-slate-900">says</span>
          </h2>
        </div>

        {/* For large devices only, search bar */}

        <div className="bg-gray-800 p-3 lg:grow">
          {/* For mobile devices, navigation access */}
          <button className="md:hidden" type="button">
            <i className="bi-list text-4xl "></i>
          </button>

          <ul className="hidden md:flex flex-row jusify-evenly gap-10 items-center py-1.5">
            <li className="md:hidden lg:inline-block lg:grow ">
              <SearchForm />
            </li>

            <li className="px-5"><a href=".">Browse all archives</a></li>
            <li className=""><a href=".">Blog</a></li>
            <li className="px-5 text-3xl">
              <div>
                <a href="/" alt={'Instagram'}><i className="bi-instagram"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
