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
  const [menuOpen, setMenuOpen] = useState(false);
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
  }, [auth, dispatch]);

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
      className={`fixed top-0 w-full z-20 transition-all duration-500  ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-r from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {/* Left side */}
        <div className="flex items-center">
          <Link to="/">
            <img className="h-8 sm:h-10" src={LOGO} alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex ml-4 space-x-4">
            <Link
              to="/browse"
              onClick={handleGptSearchClick}
              className="text-white"
            >
              Home
            </Link>
            <Link to="/browse" className="text-white">
              TV Shows
            </Link>
            <Link to="/browse" className="text-white">
              Movies
            </Link>
            <Link to="/browse" className="text-white">
              New & Popular
            </Link>
            <Link
              to="/browse"
              onClick={handleGptSearchClick}
              className="text-white"
            >
              GPT Search
            </Link>
          </nav>
        </div>

        {/* Right side */}
        {user && (
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector (shown in GPT mode) */}
            {showGptSearch && (
              <select
                className="p-1 sm:p-2 bg-gray-900 text-white text-sm sm:text-base"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Search/Homepage Toggle */}

            {/* Avatar + Logout (desktop) */}
            <div className="hidden sm:flex items-center space-x-2">
              <img className="h-6 sm:h-8" src={USER_AVATAR} alt="Avatar" />
              <button
                onClick={handleSignOut}
                className="text-white text-sm sm:text-base"
              >
                Logout
              </button>
            </div>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white flex flex-col space-y-4 px-6 py-4">
          <Link
            to="/browse"
            onClick={() => {
              setMenuOpen(false);
              handleGptSearchClick();
            }}
          >
            Home
          </Link>
          <Link to="/browse" onClick={() => setMenuOpen(false)}>
            TV Shows
          </Link>
          <Link to="/browse" onClick={() => setMenuOpen(false)}>
            Movies
          </Link>
          <Link to="/browse" onClick={() => setMenuOpen(false)}>
            New & Popular
          </Link>
          <Link
            to="/browse"
            onClick={() => {
              setMenuOpen(false);
              handleGptSearchClick();
            }}
          >
            GPT Search
          </Link>

          <div className="flex items-center space-x-2 mt-4">
            <img className="h-6" src={USER_AVATAR} alt="Avatar" />
            <button onClick={handleSignOut} className="text-white">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
