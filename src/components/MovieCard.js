import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null; // avoid broken img

  return (
    <div className="w-28 sm:w-36 md:w-48 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 active:scale-95">
      <img
        alt="Movie Poster"
        className="rounded-md shadow-md w-full h-auto object-cover"
        src={IMG_CDN_URL + posterPath}
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
