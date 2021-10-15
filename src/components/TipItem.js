import React from "react";
import Button from "../utils/Button";
import "./TipItem.css";

const TipItem = (props) => {
  const options = [5, 10, 15, 25, 50];

  return (
    <form className="form--tip" onSubmit={props.onSubmit}>
      <label className="form--tip__label" htmlFor="tip">
        Select tip %
      </label>
      <section className="form--tip__btn-container">
        {options.map((option) => {
          return (
            <Button
              key={option}
              option={option}
              onClickHandler={props.onClickHandler}
            />
          );
        })}
        <input
          type="number"
          min="0"
          value={props.enteredTip}
          id="tip"
          placeholder="Custom"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Custom")}
          className="form--tip__input"
          onChange={props.onChangeHandler}
        />
      </section>
    </form>
  );
};

export default TipItem;
