import React from "react";
import "./home.css";
import arrow from "../../assets/images_and_icons/arrow.png";
import badge from "../../assets/images_and_icons/badge.png";
import buttonLeft from "../../assets/images_and_icons/buttonLeft.png";
import buttonRight from "../../assets/images_and_icons/buttonRight.png";
const Home = () => {
  return (
    <div className="container">
      <div className="today_recomandation_section">
        <div className="free-column"></div>
        <div className="recomandation">
          <div className="recomandation-title">
            <h4>TODAY'S RECOMANDATIONS</h4>
          </div>
          <div className="recomandation-first-row">
            <div className="recomandation-movie"></div>
            <div className="recomandation-movie"></div>
            <div className="recomandation-movie"></div>
          </div>
          <div className="recomandation-second-row">
            <div className="recomandation-movie"></div>
            <div className="recomandation-movie"></div>
            <div className="recomandation-movie"></div>
          </div>
        </div>
      </div>

      <hr className="popular_movies-hr" />

      <div className="popular_movies_section">
        <div className="popular_movies-title">
          <h1>Popular Movies</h1>
          <h2>to Watch Now</h2>
          <hr className="text-hr" />
          <h5 role="button">
            view all
            <img src={arrow} alt="arrow" />
          </h5>
        </div>
        <div className="movie">
          <div className="badge">
            <img src={badge} alt="badge" />
          </div>
          <div className="favorite-selector">
            <select name="options" className="selector">
              <option value="Favorite">Favorite</option>
              <option value="Remove">Remove</option>
            </select>
          </div>
        </div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
      </div>

      <hr className="popular_movies-hr" />

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

        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
        <div className="movie"></div>
      </div>
    </div>
  );
};

export default Home;
