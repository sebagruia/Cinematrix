import React from "react";
import "./selector.css";

const Selector = ({value, handleOnChange}) => {
  return (
    <div className="favorite-selector" onClick={(e) => e.preventDefault()}>
      <select
        name="options"
        value={value}
        className="selector"
        role="button"
        onChange={(event)=>handleOnChange(event)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="favorite">Favorite</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default Selector;
