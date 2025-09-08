import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

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
        {user && (
          <div className="flex items-center space-x-4">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img className="h-8 " src={USER_AVATAR} alt="Avatar" />
            <button onClick={handleSignOut} className="text-white">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
