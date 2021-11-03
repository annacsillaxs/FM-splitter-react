import React, { useState } from "react";
import "./Container.css";
import InputItem from "./InputItem";
import TipItem from "./TipItem";
import ResultContainer from "./ResultContainer";

const data = {
  bill: {
    name: "bill",
    label: "Bill",
    type: "number",
    icon: "../images/icon-dollar.svg",
    error: "Can't be negative",
    value: "0",
    min: "0",
  },
  people: {
    name: "people",
    label: "Number of People",
    type: "number",
    icon: "../images/icon-person.svg",
    error: "Can't be zero",
    value: "1",
    min: "1",
  },
};

const data_result = {
  tip: {
    title: "Tip Amount",
    small: "/ person",
  },
  total: {
    title: "Total",
    small: "/ person",
  },
};

const Container = () => {
  // for input items
  const [enteredValue, setEnteredValue] = useState(0);
  const [enteredPeople, setEnteredPeople] = useState(1);

  // for tip selector buttons
  const [active, setActive] = useState("15");

  // for custom tip percent input
  const [enteredTip, setEnteredTip] = useState("");

  // for tip selector buttons
  const activeButtonHandler = (e) => {
    let clicked = e.target;

    if (clicked.id !== "") {
      clicked = e.target.value;
    } else {
      clicked = e.target.innerText.split("%")[0];
    }

    setActive(clicked);
  };

  // for custom tip percent input
  const inputChangeHandler = (e) => {
    setEnteredTip(e.target.value);
    setActive(e.target.value);
  };

  // for bill value input
  const inputValueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  // for people's number input
  const inputPeopleChangeHandler = (e) => {
    setEnteredPeople(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
  };

  const resetBtnHandler = () => {
    setEnteredValue(0);
    setEnteredPeople(1);
    setActive("15");
    setEnteredTip("");
  };

  // calculate tipAmount and totalAmount
  const tipAmount = ((enteredValue * active) / 100 / enteredPeople).toFixed(2);

  const totalAmount = (+tipAmount + +enteredValue / +enteredPeople).toFixed(2);

  return (
    <form className="container" onSubmit={formSubmissionHandler}>
      <InputItem
        onChange={inputValueChangeHandler}
        value={enteredValue}
        placeholder={enteredValue}
        data={data.bill}
      />

      <TipItem
        value={enteredTip}
        onChange={inputChangeHandler}
        onClickHandler={activeButtonHandler}
        activeBtn={active}
      />

      <InputItem
        onChange={inputPeopleChangeHandler}
        value={enteredPeople}
        placeholder={enteredPeople}
        data={data.people}
      />

      <ResultContainer
        data={data_result}
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        onReset={resetBtnHandler}
      />
    </form>
  );
};

export default Container;
