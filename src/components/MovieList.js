import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl md:text-3xl py-4 text-white font-semibold">
        {title}
      </h1>

      {/* Hides scrollbar but keeps scroll functionality */}
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
