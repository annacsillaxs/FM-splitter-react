import React from "react";
import "./ResultContainer.css";
import ResultItem from "./ResultItem";

const data_result = {
  tip: {
    title: "Tip Amount",
    small: "/ person",
    value: "0",
  },
  total: {
    title: "Total",
    small: "/ person",
    value: "0",
  },
};

const ResultContainer = (props) => {
  return (
    <fieldset className="result-container">
      <ResultItem data={data_result.tip} finalAmount={props.tipAmount} />
      <ResultItem data={data_result.total} finalAmount={props.totalAmount} />
      <button
        type="reset"
        className="default result__btn"
        onClick={props.onReset}
      >
        reset
      </button>
    </fieldset>
  );
};

export default ResultContainer;
