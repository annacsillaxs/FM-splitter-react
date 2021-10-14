import React from 'react'
import Button from '../utils/Button'
import './TipItem.css'

const options = [5, 10, 15, 25, 50]

const TipItem = () => {
  return (
    <form className="form--tip">
        <label className="form--tip__label">Select tip %</label>
        <section className="form--tip__btn-container">
          {options.map(option => {
            return (
                <Button key={option} option={option}/>
                )
              })}
          <input type="number" value="tip" placeholder="Custom" className="form--tip__input"/>
        </section>
    </form>
  )
}

export default TipItem
