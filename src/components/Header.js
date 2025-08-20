import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Header = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${className}`}
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
            className="h-8 "
            src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="Avatar"
          />
          <button onClick={handleSignOut} className="text-white">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
