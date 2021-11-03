import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      tabIndex="0"
      onClick={props.onClickHandler}
      className={`${+props.activeBtn === props.option ? "btn default" : "btn"}`}
      aria-live="polite"
    >
      {props.option}%
    </button>
  );
};

export default Button;
