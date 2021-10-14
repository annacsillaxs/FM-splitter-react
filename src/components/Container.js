import React from 'react'
import './Container.css'
import InputItem from './InputItem'
import TipItem from './TipItem'
import ResultContainer from './ResultContainer'

const data = {
  bill: {
    icon: "../images/icon-dollar.svg",
    label: "Bill",
    value: "142.55"
  }, 
  people: {
    icon: "../images/icon-person.svg",
    label: "Number of People",
    value: "5"
  }, 
}

const Container = () => {
  return (
    <div className="container">
      <section className="container__top">
        <InputItem data={data.bill}/>
        <TipItem />
        <InputItem data={data.people}/>
      </section>
        <ResultContainer />
    </div>
  )
}

export default Container
