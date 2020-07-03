import React from "react";
import "./switch.css";

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
    </span>
  );
};

export default Switch;
