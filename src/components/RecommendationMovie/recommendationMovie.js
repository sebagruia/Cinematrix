import React from "react";
import "./recommendationMovie.css";

const RecomandationMovie = ({ imagePath, title }) => {
  return (
    <div className="recomandation-movie">
      {imagePath ? (
        <img
          src={`https://image.tmdb.org/t/p/w185/${imagePath}`}
          alt="movie poster"
        />
      ) : (
        <div className="safety-div">
          <h4 className="title">{title}</h4>
          <h4 className="no-image">No Image Available</h4>
        </div>
      )}
    </div>
  );
};

export default RecomandationMovie;
