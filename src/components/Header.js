import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        show ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-8"
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="Logo"
            />
          </Link>
          <nav className="ml-4 space-x-4">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/tv-shows" className="text-white">
              TV Shows
            </Link>
            <Link to="/movies" className="text-white">
              Movies
            </Link>
            <Link to="/new-and-popular" className="text-white">
              New & Popular
            </Link>
            <Link to="/my-list" className="text-white">
              My List
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-1 rounded bg-gray-800 text-white"
          />
          <img
            className="h-8 rounded-full"
            src="/path-to-avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
