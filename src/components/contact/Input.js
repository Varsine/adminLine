import React from "react"

function Input(props) {
  return (
    <div className="col-6 input-div">
      <span className="input-box" id={props.inputId}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
        />
        <span className="input-field-text">{props.fieldText}</span>
      </span>
    </div>
  )
}

export default Input
