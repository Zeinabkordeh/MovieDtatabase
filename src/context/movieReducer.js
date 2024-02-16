function MovieReducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE_FAVORITES':
      const storedFavorites = localStorage.getItem('favorites');
      return {
        ...state,
        favorites: storedFavorites ? JSON.parse(storedFavorites) : state.favorites,
      }; //initialize favorites from localstorage if present

    case 'ADD_FAVORITE':
      //if movie is not already added
      if (!state.favorites.some((movie) => movie.id === action.payload.id)) {
        const favoritesAdd = [...state.favorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(favoritesAdd));
        return {
          ...state,
          favorites: favoritesAdd,
        };// all movies with the same id will be added from favorite
      };
      break;
    case 'DELETE_FAVORITE':
      const favoritesDelete = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      ); // all movies with the same id will be removed from favorite
      localStorage.setItem('favorites', JSON.stringify(favoritesDelete));
      return {
        ...state,
        favorites: favoritesDelete,
      };

    case 'CLEAR_FAVORITES':
      localStorage.removeItem('favorites');
      return {
        ...state,
        favorites: [],
      }; //clear favorites if different user logs in

    default:
      return state;
  }
}

export default MovieReducer;
