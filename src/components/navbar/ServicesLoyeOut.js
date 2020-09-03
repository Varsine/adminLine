import React from "react"

function ServicesLoyeOut({clickAdmin, clickFinanc, callServicesRef}) {
  return (
    <div>
      <div className="row">
        <div className="nav-link" onClick={clickAdmin}>
          Administrative services{" "}
          <span onClick={clickAdmin}>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="nav-link" onClick={clickFinanc}>
          Financial services{" "}
          <span onClick={clickFinanc}>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
      <a href="/#services" ref={callServicesRef} className="nav-link">
        Call center services
      </a>
    </div>
  )
}

export default ServicesLoyeOut
