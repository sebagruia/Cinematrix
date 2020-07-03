import {
  GET_MOVIE_RECOMMENDATIONS,
  GET_POPULAR_MOVIES,
  GET_FAVORITE_MOVIES,
  GET_POPULAR_TV,
  ADD_FAVORITE_MOVIES,
  REMOVE_FAVORITE_MOVIES,
  GET_SEARCHED_MOVIES,
} from "./index_actions";

const initialState = {
  recommendations: {},
  popularMovies: {},
  favoriteMovies: {},
  searchedMovies:{},
  popularTvSeries:{}
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: { ...action.payload },
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: { ...action.payload },
      };
    case GET_POPULAR_TV:
      return {
        ...state,
        popularTvSeries: { ...action.payload },
      };
    case GET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: { ...action.payload },
      };
    case ADD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: { ...action.payload },
      };
    case REMOVE_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: { ...action.payload },
      };
    case GET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: { ...action.payload },
      };
    default:
      return state;
  }
};

export default movies;
