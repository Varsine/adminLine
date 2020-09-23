import React from "react"
import {Link} from "react-router-dom"

function ServicesLoyeOut({clickAdmin, clickFinanc, callServicesRef}) {
  return (
    <div>
      <div className="row">
        <div className="nav-link" onClick={clickAdmin}>
          Administrative services{" "}
          <span>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="nav-link" onClick={clickFinanc}>
          Financial services{" "}
          <span>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
      <Link to="/adminLine/services" ref={callServicesRef} className="nav-link">
        Call center services
      </Link>
    </div>
  )
}

export default ServicesLoyeOut
