import React, { useState, useEffect } from "react";
import "./Container.css";
import InputItem from "./InputItem";
import TipItem from "./TipItem";
import ResultContainer from "./ResultContainer";

const data = {
  bill: {
    name: "bill",
    type: "number",
    icon: "../images/icon-dollar.svg",
    label: "Bill",
    error: "",
    value: "142.55",
    min: "0",
  },
  people: {
    name: "people",
    type: "number",
    icon: "../images/icon-person.svg",
    label: "Number of People",
    error: "Can't be zero",
    value: "5",
    min: "1",
  },
};

const Container = () => {
  // for input items
  const [enteredValue, setEnteredValue] = useState("142.55");
  const [enteredPeople, setEnteredPeople] = useState("5");

  // for tip selector buttons
  const [active, setActive] = useState("15");

  // for custom tip percent input
  const [enteredTip, setEnteredTip] = useState("");

  // for tip selector buttons
  useEffect(() => {
    const btnArr = document.querySelectorAll(".btn");

    btnArr.forEach((btn) =>
      btn.innerText.split("%")[0] === active
        ? (btn.className = "btn default")
        : (btn.className = "btn")
    );
  }, [active, enteredTip]);

  // for tip selector buttons
  const activeButtonHandler = (e) => {
    const clicked = e.target.innerText.split("%")[0];
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
    console.log(enteredValue);
  };

  // for people's number input
  const inputPeopleChangeHandler = (e) => {
    setEnteredPeople(e.target.value);

    const errorMsgArr = document.querySelectorAll(".form__error");

    if (e.target.value < 1) {
      e.target.classList.add("error");
      errorMsgArr[1].classList.add("visible");
    } else {
      e.target.classList.remove("error");
      errorMsgArr[1].classList.remove("visible");
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
  };

  const resetBtnHandler = () => {
    setEnteredValue("142.55");
    setEnteredPeople("5");
    setActive("15");
    setEnteredTip("");
  };

  const tipAmount = ((enteredValue * active) / 100 / enteredPeople).toFixed(2);

  const totalAmount = (+tipAmount + +enteredValue / +enteredPeople).toFixed(2);

  return (
    <div className="container">
      <section className="container__top">
        <InputItem
          data={data.bill}
          changeHandler={inputValueChangeHandler}
          value={enteredValue}
          onSubmit={formSubmissionHandler}
        />
        <TipItem
          onClickHandler={activeButtonHandler}
          onChangeHandler={inputChangeHandler}
          value={enteredTip}
          onSubmit={formSubmissionHandler}
        />
        <InputItem
          data={data.people}
          changeHandler={inputPeopleChangeHandler}
          value={enteredPeople}
          onSubmit={formSubmissionHandler}
        />
      </section>
      <ResultContainer
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        onReset={resetBtnHandler}
      />
    </div>
  );
};

export default Container;
