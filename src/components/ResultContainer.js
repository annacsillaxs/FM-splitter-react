import React from 'react'
import './ResultContainer.css'
import ResultItem from './ResultItem'

const data = {
  tip: {
    title: "Tip Amount",
    small: "/ person",
    value: "4.27"
  }, 
  total: {
    title: "Total",
    small: "/ person",
    value: "32.79"
  }, 
}

const ResultContainer = () => {
  return (
    <section className="result-container">
      <ResultItem data={data.tip}/>
      <ResultItem data={data.total}/>
      <button type="reset" className="default result__btn">RESET</button>
    </section>
  )
}

export default ResultContainer
