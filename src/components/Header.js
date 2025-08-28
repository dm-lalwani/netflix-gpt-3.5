import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign out error", error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, dispatch, navigate]);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-500 ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-r from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-8" src={LOGO} alt="Logo" />
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
          <img className="h-8 " src={USER_AVATAR} alt="Avatar" />
          <button onClick={handleSignOut} className="text-white">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
