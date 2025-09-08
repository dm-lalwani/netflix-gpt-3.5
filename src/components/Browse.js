import { useSelector } from "react-redux";
import useFetchMovies from "../hooks/useFetchMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useFetchMovies("now_playing", "nowPlayingMovies");
  useFetchMovies("popular", "popularMovies");
  useFetchMovies("top_rated", "topRatedMovies");
  useFetchMovies("upcoming", "upcomingMovies");

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
