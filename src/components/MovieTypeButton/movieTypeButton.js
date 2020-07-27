import React from "react";
import "./movieTypeButton.css";

const MovieTypeButton = (props) => {
  const { children, margin, value,  active, onClick } = props;
  return (
    <div
    onClick={()=>onClick(value)}
    value={value}
      className={`nav-button ${margin}`}
      style={
        active
          ? { backgroundColor: "#e5e5e5", color: "#113036" }
          : { backgroundColor: "initial", color: "#e5e5e5" }
      }
      role="button"
    >
      {children}
    </div>
  );
};

export default MovieTypeButton;
