import React from "react";
import "./search.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Movie from "../../components/Movie/movie";
import backArrow from "../../assets/images_and_icons/back-arrow.png";

const Search = (props) => {
  const { searchedMovies } = props;
  console.log(props);
  const { query } = props.location.state;
  return (
    <div className="container search">
      <Link to="/">
        <div className="back-arrow" role="button">
          <img src={backArrow} alt="back arrow" />
        </div>
      </Link>

      <div className="search-result-title">
        <h1>Search results: "{query}"</h1>
      </div>
      <div className="searched-movies">
        {Object.values(searchedMovies).map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            imagePath={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            votes={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedMovies: state.movies.searchedMovies,
  };
};

export default withRouter(connect(mapStateToProps)(Search));
