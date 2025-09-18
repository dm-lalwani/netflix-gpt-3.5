import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GPTMovieSuggestions";
import GptSearchBar from "./GPTSearchBar";
import Header from "./Header";

const GPTSearch = () => {
  return (
    <>
      <Header />
      <div className="fixed -z-10 w-full h-full">
        <img className="w-full h-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};
export default GPTSearch;
