import useFetchMovies from "../hooks/useFetchMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovies("now_playing", "nowPlayingMovies");
  useFetchMovies("popular", "popularMovies");
  useFetchMovies("top_rated", "topRatedMovies");
  useFetchMovies("upcoming", "upcomingMovies");

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
