import React, { Fragment, useState } from "react";
import "./popular.css";
import { connect } from "react-redux";
import {setMediaType} from "../../redux/index_actions";
import Movie from "../Movie/movie";
import Switch from "../Switch/switch";
import PopularNav from "../PopularNav/popularNav";
import arrow from "../../assets/images_and_icons/arrow.png";
import arrowClose from "../../assets/images_and_icons/arrow-close.png";

const Popular = ({
  dispatch,
  popularMovies,
  popularTvSeries,
  trendingMoviesOrTv,
  topRatedMoviesOrTv,
  inTheatresMovies,
  mediaType,
}) => {
  const [view, setView] = useState(false);
  const [active, setActive] = useState(true);

  const { popular, trending, top_rated, now_playing } = mediaType;

  const handleView = () => {
    setView(!view);
  };

  const handleSwitch = () => {
    const newMediaType = {
      popular:true,
      trending:false,
      top_rated:false,
      now_playing:false
    }
    setActive(!active);
    dispatch(setMediaType(newMediaType));
  };

  return (
    <Fragment>
      <PopularNav movie={active} />
      <div
        className="popular_movies_section"
        style={
          view
            ? { overflow: "visible", height: "auto" }
            : { overflow: "hidden", height: "390px" }
        }
      >
        <div className="popular_movies-title">
          <h1>
            Popular <Switch active={active} handleSwitch={handleSwitch} />
          </h1>
          <h2>to Watch Now</h2>
          <hr className="text-hr" />
          <h5 role="button" onClick={handleView}>
            {view ? (
              <Fragment>
                hide
                <img src={arrowClose} alt="arrow close" />
              </Fragment>
            ) : (
              <Fragment>
                view all
                <img src={arrow} alt="arrow" />
              </Fragment>
            )}
          </h5>
        </div>
        {active && popular
          ? Object.values(popularMovies).map((popularMovie) => (
              <Movie
                key={popularMovie.id}
                id={popularMovie.id}
                imagePath={popularMovie.poster_path}
                title={popularMovie.title}
                overview={popularMovie.overview}
                release_date={popularMovie.release_date}
                votes={popularMovie.vote_average}
              />
            ))
          : active && trending
          ? Object.values(trendingMoviesOrTv).map((trendingMovie) => (
              <Movie
                key={trendingMovie.id}
                id={trendingMovie.id}
                imagePath={trendingMovie.poster_path}
                title={trendingMovie.title}
                overview={trendingMovie.overview}
                release_date={trendingMovie.release_date}
                votes={trendingMovie.vote_average}
              />
            ))
          : active && top_rated
          ? Object.values(topRatedMoviesOrTv).map((topRatedMovie) => (
              <Movie
                key={topRatedMovie.id}
                id={topRatedMovie.id}
                imagePath={topRatedMovie.poster_path}
                title={topRatedMovie.title}
                overview={topRatedMovie.overview}
                release_date={topRatedMovie.release_date}
                votes={topRatedMovie.vote_average}
              />
            ))
          : active && now_playing
          ? Object.values(inTheatresMovies).map((inTheatresMovie) => (
              <Movie
                key={inTheatresMovie.id}
                id={inTheatresMovie.id}
                imagePath={inTheatresMovie.poster_path}
                title={inTheatresMovie.title}
                overview={inTheatresMovie.overview}
                release_date={inTheatresMovie.release_date}
                votes={inTheatresMovie.vote_average}
              />
            ))
          : !active && popular
          ? Object.values(popularTvSeries).map((popularTv) => (
              <Movie
                key={popularTv.id}
                id={popularTv.id}
                imagePath={popularTv.poster_path}
                title={popularTv.name}
                overview={popularTv.overview}
                release_date={popularTv.first_air_date}
                votes={popularTv.vote_average}
              />
            ))
          : !active && trending
          ? Object.values(trendingMoviesOrTv).map((trendingMovie) => (
              <Movie
                key={trendingMovie.id}
                id={trendingMovie.id}
                imagePath={trendingMovie.poster_path}
                title={trendingMovie.title}
                overview={trendingMovie.overview}
                release_date={trendingMovie.release_date}
                votes={trendingMovie.vote_average}
              />
            ))
          : !active && top_rated
          ? Object.values(topRatedMoviesOrTv).map((topRatedMovie) => (
              <Movie
                key={topRatedMovie.id}
                id={topRatedMovie.id}
                imagePath={topRatedMovie.poster_path}
                title={topRatedMovie.title}
                overview={topRatedMovie.overview}
                release_date={topRatedMovie.release_date}
                votes={topRatedMovie.vote_average}
              />
            ))
          : null}
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.popularMovies,
    popularTvSeries: state.movies.popularTvSeries,
    trendingMoviesOrTv: state.movies.trendingMoviesOrTv,
    topRatedMoviesOrTv: state.movies.topRatedMoviesOrTv,
    inTheatresMovies: state.movies.inTheatresMovies,
    mediaType: state.movies.mediaType,
  };
};

export default connect(mapStateToProps)(Popular);
