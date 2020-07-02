import React from "react";
import "./movieDetails.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import backArrowWhite from "../../assets/images_and_icons/backArrow-white.png";

const MovieDetails = (props) => {
  const {
    imagePath,
    title,
    overview,
    release_date,
    votes,
  } = props.location.state;
  console.log(imagePath);
  return (
    <div className=" container movieDetails-container">
      <Link to="/">
        <div className="back-arrow-white" role="button">
          <img src={backArrowWhite} alt="back arrow" />
        </div>
      </Link>

      <div className="movie-poster-container">

        {imagePath ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${imagePath}`}
            alt="movie poster"
          />
        ) : (
          <div className="safety-div">
            <h4 className="title">{title}</h4>
            <h4 className="no-image">No Image Available</h4>
          </div>
        )}
        
      </div>
      <div className="movie-details-container">
        <h1 className="movieDetails-title">
          {title}
          <span>({release_date.slice(0, 4)})</span>
        </h1>
        <div className="movie-details-stats">
          <div className="movie-details-votes">
            <div className="movie-details-votes-specialborder">{votes}</div>
          </div>
          <div className="movie-details-votes-text">
            <h6>User</h6>
            <h6>Score</h6>
          </div>
        </div>
        <div className="movie-details-overview">
          <h5>Overview</h5>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect()(MovieDetails));
