import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GPTMovieSuggestions";
import GptSearchBar from "./GPTSearchBar";
import Header from "./Header";

const GPTSearch = () => {
  return (
    <>
      <Header />
      <div>
        <div className="absolute -z-10">
          <img src={BG_URL} alt="logo" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
