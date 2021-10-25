import React from "react";

const Star = (props) => {
  return (
    <div
      className="star"
      id={props.id}
      onMouseEnter={props.handleEnter}
      onMouseLeave={props.handleLeave}
      onClick={props.handleClick}
    >
      {" "}
      &#9733;{" "}
    </div>
  );
};

export default Star;
