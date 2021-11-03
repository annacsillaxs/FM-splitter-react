import React, { useState, useEffect } from "react";
import "./InputItem.css";

const InputItem = (props) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (props.value < props.data.min) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [props.value, props.data.min]);

  return (
    <fieldset className="fieldset">
      <label className="fieldset__label" htmlFor={props.data.name}>
        {props.data.label}
      </label>
      <input
        type={props.data.type}
        min={props.data.min}
        id={props.data.name}
        value={props.value}
        placeholder={props.data.value}
        className={`${showError ? "fieldset__input error" : "fieldset__input"}`}
        onChange={props.onChange}
      />
      <img
        src={props.data.icon}
        alt=""
        aria-hidden="true"
        className="fieldset__icon"
      />

      {showError && <p className="fieldset__error">{props.data.error}</p>}
    </fieldset>
  );
};

export default InputItem;
