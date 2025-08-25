import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (movies.length === 0) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <section className="relative w-screen aspect-video overflow-hidden">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Overlay Title */}
      <VideoTitle title={original_title} overview={overview} />
    </section>
  );
};

export default MainContainer;
