import {
  GET_MOVIE_RECOMMENDATIONS,
  GET_POPULAR_MOVIES,
  GET_FAVORITE_MOVIES,
  GET_POPULAR_TV,
  ADD_FAVORITE_MOVIES,
  REMOVE_FAVORITE_MOVIES,
  GET_SEARCHED_MOVIES,
  GET_TRENDING_MOVIES_OR_TV,
  GET_TOP_RATED_MOVIES_OR_TV,
  GET_IN_THEATRES_MOVIES,
  SET_MEDIA_TYPE
} from "./index_actions";

const initialState = {
  recommendations: {},
  popularMovies: {},
  favoriteMovies: {},
  searchedMovies:{},
  trendingMoviesOrTv:{},
  topRatedMoviesOrTv:{},
  popularTvSeries:{},
  inTheatresMovies:{},
  mediaType:{
    popular:true,
    trending:false,
    top_rated:false,
    now_playing:false
  }
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
    case GET_IN_THEATRES_MOVIES:
      return {
        ...state,
        inTheatresMovies: { ...action.payload },
      };
    case   GET_TRENDING_MOVIES_OR_TV:
      return {
        ...state,
        trendingMoviesOrTv: { ...action.payload },
      };
    case   GET_TOP_RATED_MOVIES_OR_TV:
      return {
        ...state,
        topRatedMoviesOrTv: { ...action.payload },
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
    case SET_MEDIA_TYPE:
      return {
        ...state,
        mediaType: { ...action.payload },
      };
    default:
      return state;
  }
};

export default movies;
