import { showLoading, hideLoading } from "react-redux-loading-bar";
import { generatingGenreIdArray } from "../utils/utils";
export const GET_MOVIE_RECOMMENDATIONS = "GET_MOVIE_RECOMANDATIONS";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_POPULAR_TV = "GET_POPULAR_TV";
export const GET_FAVORITE_MOVIES = "GET_FAVORITE_MOVIES";
export const ADD_FAVORITE_MOVIES = "ADD_FAVORITE_MOVIES";
export const REMOVE_FAVORITE_MOVIES = "REMOVE_FAVORITE_MOVIES";
export const GET_SEARCHED_MOVIES = "GET_SEARCHED_MOVIES";
export const GET_TRENDING_MOVIES_OR_TV = "GET_TRENDING_MOVIES_OR_TV";
export const GET_TOP_RATED_MOVIES_OR_TV = "GET_TOP_RATED_MOVIES_OR_TV";
export const GET_IN_THEATRES_MOVIES = "GET_IN_THEATRES_MOVIES";
export const SET_MEDIA_TYPE = "SET_MEDIA_TYPE";

export const getMovieRecommendationsAction = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const genreId = generatingGenreIdArray();
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${genreId}/recommendations?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1`
    );
    const recommendations = await data.json();
    dispatch({
      type: GET_MOVIE_RECOMMENDATIONS,
      payload: recommendations.results,
    });
  } catch (error) {
    console.log(`Error when fetching Recomandations ${error}`);
  }
};

export const getPopularMoviesAction = () => async (dispatch) => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1"
    );
    const popularMovies = await data.json();
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: popularMovies.results,
    });
  } catch (error) {
    console.log(`Error when fetching Popular Movies ${error}`);
  }

  dispatch(hideLoading());
};

export const getInTheatersMoviesAction = () => async (dispatch) => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1"
    );
    const inTheatresMovies = await data.json();
    dispatch({
      type: GET_IN_THEATRES_MOVIES,
      payload: inTheatresMovies.results,
    });
  } catch (error) {
    console.log(`Error when fetching Popular Movies ${error}`);
  }

  dispatch(hideLoading());
};


export const getTrendingMoviesOrTvAction = (type) => async (dispatch) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/week?api_key=ef3ea0075e58d32f265c175d329ef49e`
    );
    const trendingMoviesOrTv = await data.json();
    dispatch({
      type: GET_TRENDING_MOVIES_OR_TV,
      payload: trendingMoviesOrTv.results,
    });
  } catch (error) {
    console.log(`Error when fetching Popular Movies ${error}`);
  }

  dispatch(hideLoading());
};


export const getTopRatedgMoviesOrTvAction = (type) => async (dispatch) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/${type}/top_rated?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1`
    );
    const topRatedMoviesOrTv = await data.json();
    dispatch({
      type: GET_TOP_RATED_MOVIES_OR_TV,
      payload: topRatedMoviesOrTv.results,
    });
  } catch (error) {
    console.log(`Error when fetching Popular Movies ${error}`);
  }

  dispatch(hideLoading());
};


export const getPopularTvAction = () => async (dispatch) => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1"
    );
    const popularTvSeries = await data.json();
    dispatch({
      type: GET_POPULAR_TV,
      payload: popularTvSeries.results,
    });
  } catch (error) {
    console.log(`Error when fetching Popular Movies ${error}`);
  }

  dispatch(hideLoading());
};

export const getMyFavoriteMovies = () => {
  return {
    type: GET_FAVORITE_MOVIES,
    payload: window.localStorage,
  };
};

export const addFavoriteMovieAction = (favoriteMovies) => {
  return {
    type: ADD_FAVORITE_MOVIES,
    payload: favoriteMovies,
  };
};
export const removeFavoriteMovieAction = (favoriteMovies) => {
  return {
    type: REMOVE_FAVORITE_MOVIES,
    payload: favoriteMovies,
  };
};

export const searchMoviesAction = (query) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const searchedMovies = await data.json();
    dispatch({
      type: GET_SEARCHED_MOVIES,
      payload: searchedMovies.results,
    });
  } catch (error) {
    console.log(`Error when fetching Searched Movies ${error}`);
  }

  dispatch(hideLoading());
};

export const setMediaType = (media)=>{
  return{
    type:SET_MEDIA_TYPE,
    payload:media
  }
}
