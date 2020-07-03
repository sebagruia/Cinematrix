import React from "react";
import "./switch.css";
import arrowOpen from "../../assets/images_and_icons/arrow-open.png"

const Switch = ({ active, handleSwitch }) => {
  return (
    <span
      className="switch-span"
      role="button"
      onClick={()=>handleSwitch()}
      style={
        active ? { backgroundColor: "#548a77" } : { backgroundColor: "#966800" }
      }
    >
      {active ? "Movies" : "TV"}
      <img src={arrowOpen}  alt="arrow"/>
    </span>
  );
};

export default Switch;
