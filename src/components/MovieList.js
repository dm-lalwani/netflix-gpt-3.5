import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 sm:px-6">
      <h2 className="text-lg sm:text-2xl md:text-3xl py-2 sm:py-4 text-white font-semibold">
        {title}
      </h2>

      {/* Horizontal scroll list */}
      <div className="flex overflow-x-auto space-x-3 sm:space-x-4 no-scrollbar pb-2">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))
        ) : (
          <p className="text-gray-400 text-sm sm:text-base">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
