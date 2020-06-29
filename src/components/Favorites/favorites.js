import React from "react";
import "./favorites.css";
import buttonLeft from "../../assets/images_and_icons/buttonLeft.png";
import buttonRight from "../../assets/images_and_icons/buttonRight.png";

const Favorites = ()=>{
    return(
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
    );
}

export default Favorites;