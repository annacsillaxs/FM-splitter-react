import React from 'react'
import './ResultItem.css'

const ResultItem = (props) => {
  return (
    <div className="item__container">
      <div className="item__text-box">
        <p className="item__title">{props.data.title}</p>
        <small className="item__small">{props.data.small}</small>
      </div>
      <div className="item__amount">${props.data.value}</div>
    </div>
  )
}

export default ResultItem
