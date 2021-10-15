import React from "react";
import "./InputItem.css";

const InputItem = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label className="form__label" htmlFor={props.data.name}>
        {props.data.label}
      </label>
      <small className="form__error">{props.data.error}</small>
      <img src={props.data.icon} alt="dollar sign" className="form__icon" />
      <input
        type={props.data.type}
        min={props.data.min}
        id={props.data.name}
        value={props.value}
        placeholder={props.value}
        className="form__input"
        onChange={props.changeHandler}
      />
    </form>
  );
};

export default InputItem;
