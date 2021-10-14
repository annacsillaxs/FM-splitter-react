import React from 'react';
import './InputItem.css'

const InputItem = (props) => {
 
  return (
    <form className="form">
        <label className="form__label">{props.data.label}</label>
        <img src={props.data.icon} alt="dollar sign" className="form__icon"/>
        <input type="number" value={props.data.value} className="form__input"/>
    </form>
  )
}

export default InputItem
