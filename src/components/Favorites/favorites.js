import React from "react";
import "./favorites.css";
import Movie from "../Movie/movie";
import buttonLeft from "../../assets/images_and_icons/buttonLeft.png";
import buttonRight from "../../assets/images_and_icons/buttonRight.png";
import { connect } from "react-redux";

const Favorites = ({ favoriteMovies }) => {
  return (
    <div className="my-favorites-section">
      <div className="my-favorites-title">
        <h1>My Favorites</h1>
        <div className="buttons-container">
          <div className="button-left" role="button">
            <img src={buttonLeft} alt="button left" />
          </div>
          <div className="button-right" role="button">
            <img src={buttonRight} alt="button right" />
          </div>
        </div>
      </div>
      {Object.values(favoriteMovies).map((movie) => {
        const movieParsed = JSON.parse(movie);
        return (
          <Movie
            key={movieParsed.id}
            id={movieParsed.id}
            imagePath={movieParsed.imagePath}
            title={movieParsed.title}
            votes={movieParsed.vote_average}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.movies.favoriteMovies,
  };
};

export default connect(mapStateToProps)(Favorites);
