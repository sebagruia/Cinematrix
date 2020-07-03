import React, { Fragment, useState } from "react";
import "./popular.css";
import { connect } from "react-redux";
import Movie from "../Movie/movie";
import Switch from "../Switch/switch";
import arrow from "../../assets/images_and_icons/arrow.png";
import arrowClose from "../../assets/images_and_icons/arrow-close.png";

const Popular = ({ popularMovies, popularTvSeries }) => {
  const [view, setView] = useState(false);
  const [active, setActive] = useState(true);

  const handleView = () => {
    setView(!view);
  };

  const handleSwitch = () => {
    setActive(!active);
  };

  return (
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
          Popular{" "}
          <Switch active={active} handleSwitch={handleSwitch}/>
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
      {active
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
        : Object.values(popularTvSeries).map((popularTv) => (
            <Movie
              key={popularTv.id}
              id={popularTv.id}
              imagePath={popularTv.poster_path}
              title={popularTv.name}
              overview={popularTv.overview}
              release_date={popularTv.first_air_date}
              votes={popularTv.vote_average}
            />
          ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.popularMovies,
    popularTvSeries: state.movies.popularTvSeries,
  };
};

export default connect(mapStateToProps)(Popular);
