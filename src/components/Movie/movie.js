import React, { useState } from "react";
import "./movie.css";
import { connect } from "react-redux";
import {
  addFavoriteMovieAction,
  removeFavoriteMovieAction,
} from "../../redux/index_actions";
import {
  addToFavoriteToLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../utils/utils";
import badge from "../../assets/images_and_icons/badge.png";

const Movie = ({ dispatch, imagePath, title, id, votes }) => {

  const [value, setValue] = useState("move");
  const movieObject = { title, imagePath, votes, id };

  const myStorage = window.localStorage;

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
    <div className="movie">
      {/* <div className="badge">
        <img src={badge} alt="badge" />
      </div> */}
      <div className="favorite-selector">
        <select
          name="options"
          value={value}
          className="selector"
          role="button"
          onChange={handleOnChange}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="favorite">Favorite</option>
          <option value="none">None</option>
        </select>
      </div>
      {imagePath ? (
        <img
          src={`https://image.tmdb.org/t/p/w92/${imagePath}`}
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

export default connect()(Movie);
