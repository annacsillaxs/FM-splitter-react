import React from "react";

const Button = (props) => {
  return (
    <button type="button" onClick={props.onClickHandler} className="btn">
      {props.option}%
    </button>
  );
};

export default Button;
