import React from "react";
import Button from "../utils/Button";
import "./TipItem.css";

const TipItem = (props) => {
  const options = [5, 10, 15, 25, 50];

  return (
    <fieldset className="fieldset--tip" onSubmit={props.onSubmit}>
      <legend className="fieldset--tip__label">Select tip %</legend>
      <div className="fieldset--tip__btn-container">
        {options.map((option) => {
          return (
            <Button
              key={option}
              option={option}
              onClickHandler={props.onClickHandler}
              activeBtn={props.activeBtn}
            />
          );
        })}
        <input
          role="button"
          type="number"
          min="0"
          value={props.value}
          id="tip"
          placeholder="Custom"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Custom")}
          className={`${
            props.activeBtn === props.value
              ? "fieldset--tip__input active"
              : "fieldset--tip__input"
          }`}
          onChange={props.onChange}
          onClick={props.onClickHandler}
        />
      </div>
    </fieldset>
  );
};

export default TipItem;
