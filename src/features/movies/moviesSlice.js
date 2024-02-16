import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // popular: fetchMovies("popular") || [],
    // top_rated: fetchMovies('top_rated') || [],
    // upcoming: fetchMovies('upcoming') || [],
    // now_playing: fetchMovies('now_playing') || [],
    popular: [],
    topRated: [],
    upcoming: [],
    nowPlaying: [],
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        loadMovies: (state, action) => {
            // console.log(action, action.type, action.payload);
            switch (action.payload.category) {
                case "popular":
                    state.popular = action.payload.movies;
                    break;
                case "topRated":
                    state.topRated = action.payload.movies;
                    break;
                case "upcoming":
                    state.upcoming = action.payload.movies;
                    break;
                case "nowPlaying":
                    state.nowPlaying = action.payload.movies;
                    break;
                default:
                    return state;
            }
        },
    },
});

export const { loadMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
