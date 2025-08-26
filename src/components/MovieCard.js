import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null; // avoid broken img

  return (
    <div className="w-36 md:w-48 flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
      <img
        alt="Movie Card"
        className="rounded-md shadow-md"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
