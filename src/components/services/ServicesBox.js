import React from "react"
import {Link} from "react-router-dom"

export default function ServicesBox(props) {
  return (
    <div className={props.parentClassName}>
      <Link to={props.path} className="service-box-link">
        <div className={props.className}>
          <img src={props.src} />
          <h3>{props.content}</h3>
          <p>{props.paragraf}</p>
        </div>
      </Link>
    </div>
  )
}
