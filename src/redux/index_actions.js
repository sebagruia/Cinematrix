import { showLoading, hideLoading } from "react-redux-loading-bar";
import { generatingGenreIdArray } from "../utils/utils";
export const GET_MOVIE_RECOMMENDATIONS = "GET_MOVIE_RECOMANDATIONS";

const getMovieGenres = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=ef3ea0075e58d32f265c175d329ef49e&language=en-US"
    );
    const genresMovies = await data.json();
    return genresMovies.genres;
  };


export const getMovieRecommendationsAction = () => async (dispatch) => {
  dispatch(showLoading());
  const genres = await getMovieGenres(); 
  const genreId = generatingGenreIdArray(genres);
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


