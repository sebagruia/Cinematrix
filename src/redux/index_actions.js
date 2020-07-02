import { showLoading, hideLoading } from "react-redux-loading-bar";
import { generatingGenreIdArray } from "../utils/utils";
export const GET_MOVIE_RECOMMENDATIONS = "GET_MOVIE_RECOMANDATIONS";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_FAVORITE_MOVIES = "GET_FAVORITE_MOVIES";
export const ADD_FAVORITE_MOVIES = "ADD_FAVORITE_MOVIES";
export const REMOVE_FAVORITE_MOVIES = "REMOVE_FAVORITE_MOVIES";
export const GET_SEARCHED_MOVIES = "GET_SEARCHED_MOVIES";


export const getMovieRecommendationsAction = () => async (dispatch) => {
  dispatch(showLoading());
  const genreId = generatingGenreIdArray();
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${genreId}/recommendations?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1`
  );
  const recommendations = await data.json();
  dispatch({
    type: GET_MOVIE_RECOMMENDATIONS,
    payload: recommendations.results,
  });
  dispatch(hideLoading());
};

export const getPopularMoviesAction = () => async (dispatch) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&page=1"
  );
  const popularMovies = await data.json();
  dispatch({
    type: GET_POPULAR_MOVIES,
    payload: popularMovies.results,
  });
};

export const getMyFavoriteMovies = ()=>{
   return{
    type:GET_FAVORITE_MOVIES,
    payload: window.localStorage,
   }
}

export const addFavoriteMovieAction = (favoriteMovies)=>{
  return{
    type: ADD_FAVORITE_MOVIES,
    payload: favoriteMovies
  }
}
export const removeFavoriteMovieAction = (favoriteMovies)=>{
  return{
    type: REMOVE_FAVORITE_MOVIES,
    payload: favoriteMovies
  }
}

export const searchMoviesAction = (query)=>async (dispatch)=>{
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const searchedMovies = await data.json();
    dispatch({
      type: GET_SEARCHED_MOVIES,
      payload: searchedMovies.results,
    });



}



