import React from "react";
import "./ResultItem.css";

const ResultItem = (props) => {
  return (
    <div className="item__container">
      <div className="item__text-box">
        <h2 className="item__title">{props.data.title}</h2>
        <p className="item__small">{props.data.small}</p>
      </div>
      <p className="item__amount">${props.finalAmount}</p>
    </div>
  );
};

export default ResultItem;
