import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import favsReducer from "../features/favs/favsSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        favs: favsReducer
    },
});
