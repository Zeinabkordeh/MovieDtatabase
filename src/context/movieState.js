import React, { createContext, useReducer, useEffect } from 'react';
import MovieReducer from './movieReducer';

const initialState = {
  favorites: [], // Initialize favorites as an empty array
};

const FavoriteContext = createContext(initialState);

function FavoriteProvider({ children }) {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_FAVORITES' });
  }, []); //ensure favorites are rendered upon page refresh

  function addFavorite(movie) {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: movie,
    });
  }

  function deleteFavorite(movie) {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: movie,
    });
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export { FavoriteContext, FavoriteProvider };
