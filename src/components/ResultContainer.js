import React from "react";
import "./ResultContainer.css";
import ResultItem from "./ResultItem";

const data = {
  tip: {
    title: "Tip Amount",
    small: "/ person",
    value: "4.27",
  },
  total: {
    title: "Total",
    small: "/ person",
    value: "32.79",
  },
};

const ResultContainer = (props) => {
  return (
    <section className="result-container">
      <ResultItem data={data.tip} finalAmount={props.tipAmount} />
      <ResultItem data={data.total} finalAmount={props.totalAmount} />
      <button
        type="reset"
        className="default result__btn"
        onClick={props.onReset}
      >
        RESET
      </button>
    </section>
  );
};

export default ResultContainer;
