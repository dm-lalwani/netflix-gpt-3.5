import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";

const useFetchMovies = (url, reducerKey) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${url}?page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addMovies({ key: reducerKey, movies: json.results }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useFetchMovies;
