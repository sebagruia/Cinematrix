import React, { useEffect } from "react";
import "./popularNav.css";
import MovieTypeButton from "../MovieTypeButton/movieTypeButton";
import { connect } from "react-redux";
import {
  getTrendingMoviesOrTvAction,
  getTopRatedgMoviesOrTvAction,
  getInTheatersMoviesAction,
  setMediaType,
} from "../../redux/index_actions";

const PopularNav = ({ dispatch, movie, mediaTypes }) => {

  const { popular, trending, top_rated, now_playing } = mediaTypes;

  useEffect(() => {
    generateTrendingMovieOrTvContent();
    getTopRatedgMoviesOrTvContent();
    getInTheatersMoviesContent();
  });

  const handleClick = (value) => {
    for (let type in mediaTypes) {
      if (type === value) {
        mediaTypes[type] = true;
      } else {
        mediaTypes[type] = false;
      }
    }
    dispatch(setMediaType(mediaTypes));
  };

  const generateTrendingMovieOrTvContent = () => {
    if (trending === true && movie === true) {
      dispatch(getTrendingMoviesOrTvAction("movie"));
    } else if (trending === true && movie === false) {
      dispatch(getTrendingMoviesOrTvAction("tv"));
    }
  };
  const getTopRatedgMoviesOrTvContent = () => {
    if (top_rated === true && movie === true) {
      dispatch(getTopRatedgMoviesOrTvAction("movie"));
    } else if (top_rated === true && movie === false) {
      dispatch(getTopRatedgMoviesOrTvAction("tv"));
    }
  };
  const getInTheatersMoviesContent = () => {
    dispatch(getInTheatersMoviesAction());
  };


  return (
    <div className="popular_movie_nav" style={!movie ? {width: "224px"}:null}>
      <MovieTypeButton
        onClick={handleClick}
        active={popular}
        margin="button1"
        value="popular"
      >
        <p>Popular</p>
      </MovieTypeButton>

      <MovieTypeButton onClick={handleClick} active={trending} value="trending">
        <p>Trending</p>
      </MovieTypeButton>

      <MovieTypeButton
        onClick={handleClick}
        active={top_rated}
        margin="button3"
        value="top_rated"
      >
        <p>Top Rated</p>
      </MovieTypeButton>

      {movie ? (
        <MovieTypeButton
          onClick={handleClick}
          active={now_playing}
          margin="button4"
          value="now_playing"
        >
          <p>In Theaters</p>
        </MovieTypeButton>
      )
       : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mediaTypes: state.movies.mediaType,
  };
};

export default connect(mapStateToProps)(PopularNav);
