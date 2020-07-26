import React from "react"
import {Link} from "react-router-dom"

function ServicesLoyeOut(props) {
  return (
    <div>
      <div className="row">
        <Link className="nav-link" to={"/"}>
          Administrative services{" "}
          <span onClick={props.clickAdmin}>
            <i class="fas fa-angle-right"></i>
          </span>
        </Link>
      </div>
      <div className="row">
        <Link className="nav-link" to={"/"}>
          Financial services{" "}
          <span onClick={props.clickFinanc}>
            <i class="fas fa-angle-right"></i>
          </span>
        </Link>
      </div>
      <Link className="nav-link" to={"/"}>
        Call center services
      </Link>
    </div>
  )
}

export default ServicesLoyeOut
