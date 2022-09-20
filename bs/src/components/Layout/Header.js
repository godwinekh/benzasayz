import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="bg-stone-400 bg-opacity-95 text-white shadow-md fixed top-0 right-0 left-0 z-20">
      <nav className="flex justify-between items-center">
        <div className="pl-5 py-4 lg:px-16">
          <Link to="/home" className="text-2xl font-extrabold text-gray-900 cursor-pointer">
            Benza<span className="font-thin text-slate-900">says</span>
          </Link>
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

            <li className="px-5">
              <Link to="/reviews/all-reviews">Browse all reviews</Link>
            </li>
            <li className="">
              <Link to="">Blog</Link>
            </li>
            <li className="px-5 text-3xl">
              <div>
                <a href="https://www.instagram.com/benzasayz/" target="_blank" rel="noreferrer" alt={"Instagram"}>
                  <i className="bi-instagram"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
