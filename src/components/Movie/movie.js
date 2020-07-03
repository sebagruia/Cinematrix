import React, { useState } from "react";
import "./movie.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addFavoriteMovieAction,
  removeFavoriteMovieAction,
} from "../../redux/index_actions";
import {
  addToFavoriteToLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../utils/utils";
import Selector from "../Selector/selector";

const Movie = ({
  dispatch,
  imagePath,
  title,
  overview,
  release_date,
  id,
  votes,
}) => {
  const [value, setValue] = useState("move");
  const movieObject = { title, imagePath, overview, release_date, votes, id };

  const myStorage = window.localStorage;

  // I'm adding the "movieObject" to "localStorage"
  const handleOnChange = (event) => {
    setValue(event.target.value);

    if (event.target.value === "favorite") {
      if (myStorage.getItem(id) === null) {
        addToFavoriteToLocalStorage(
          JSON.stringify(id),
          JSON.stringify(movieObject)
        );
        dispatch(addFavoriteMovieAction(window.localStorage));
      } else {
        alert("This Movie is already your Favorite list");
      }
    } else {
      if (myStorage.getItem(id) === null) {
        alert("This Movie is not in your Favorite list");
      } else {
        removeFavoriteFromLocalStorage(JSON.stringify(id));
        dispatch(removeFavoriteMovieAction(window.localStorage));
      }
    }
  };

  return (
    <Link
      to={{
        pathname: "/moviedetails",
        state: { title, imagePath, overview, release_date, votes },
      }}
    >
      <div
        className="movie"
        style={
          imagePath === null
            ? {
                border: "1px solid #113036",
                borderRadius: "10px",
              }
            : null
        }
      >
        <div className="votes">
          <h6>{votes}</h6>
        </div>
        <Selector handleOnChange={handleOnChange} value={value}/>
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

export default connect()(Movie);
