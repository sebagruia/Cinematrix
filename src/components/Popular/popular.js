import React, { Fragment, useState } from "react";
import "./popular.css";
import { connect } from "react-redux";
import Movie from "../Movie/movie";
import arrow from "../../assets/images_and_icons/arrow.png";
import arrowClose from "../../assets/images_and_icons/arrow-close.png";

const Popular = ({ popularMovies }) => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
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
        <h1>Popular Movies</h1>
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
      {Object.values(popularMovies).map((popularMovie) => (
        <Movie
          key={popularMovie.id}
          id={popularMovie.id}
          imagePath={popularMovie.poster_path}
          title={popularMovie.title}
          overview={popularMovie.overview}
          release_date={popularMovie.release_date}
          votes={popularMovie.vote_average}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.popularMovies,
  };
};

export default connect(mapStateToProps)(Popular);
