import React, { useState } from "react";
import "./favorites.css";
import Movie from "../Movie/movie";
import buttonLeft from "../../assets/images_and_icons/buttonLeft.png";
import buttonRight from "../../assets/images_and_icons/buttonRight.png";
import { connect } from "react-redux";

let move = 0;

const Favorites = ({ favoriteMovies }) => {
  const [goLeft, setGoLeft] = useState({});

  let sliderLength = Object.values(favoriteMovies).length;

  const onClickLeft = (event) => {
    const sliderSize = (- sliderLength * 120);
    console.log(sliderSize)
    let go = (move -= 120);
    if (go > sliderSize) {
      setGoLeft({
        transform: `translate(${go}px)`,
      });
    } else  {
      setGoLeft({
        transform: `translate(0px)`,
      });
      move = 0;
    }
    console.log(go)
  };
  const onClickRight = (event) => {
    const sliderSize = sliderLength * 120;
    let go = (move += 120);
    if (go < sliderSize) {
      setGoLeft({
        transform: `translate(${go}px)`,
      });
    } else {
      setGoLeft({
        transform: `translate(0px)`,
      });
      move = 0;
    }
    console.log(go)
  };

  return (
    <div className="my-favorites-section">
      <div className="my-favorites-title">
        <h1>My Favorites</h1>
        <div className="buttons-container">
          <div className="button-left" role="button" onClick={onClickLeft}>
            <img src={buttonLeft} alt="button left" />
          </div>
          <div className="button-right" role="button" onClick={onClickRight}>
            <img src={buttonRight} alt="button right" />
          </div>
        </div>
      </div>
      <div className="my-favorites-movie-container">
        <div className="my-favorites-slider" style={goLeft}>
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
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.movies.favoriteMovies,
  };
};

export default connect(mapStateToProps)(Favorites);
