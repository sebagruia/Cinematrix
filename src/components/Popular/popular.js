import React from "react";
import "./popular.css";
import arrow from "../../assets/images_and_icons/arrow.png";
import badge from "../../assets/images_and_icons/badge.png";

const Popular = () => {
  return (
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
          <select name="options" className="selector" role="button">
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
    </div>
  );
};

export default Popular;
