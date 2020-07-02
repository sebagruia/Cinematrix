import React from "react";
import "./recommendationMovie.css";
import { Link } from "react-router-dom";

const RecomandationMovie = ({ id, imagePath, title, overview, release_date, votes }) => {
  return (
    <Link
      to={{
        pathname: "/moviedetails",
        state: { title, imagePath, overview, release_date, votes },
      }} >
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
    </Link>
  );
};

export default RecomandationMovie;
