import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    trailerVideo: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovies: (state, action) => {
      const { key, movies } = action.payload;
      state[key] = movies; // dynamically sets the right state property
    },
  },
});

export const { addMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
