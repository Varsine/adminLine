import React from "react"
import {Link} from "react-router-dom"

function AboutLoyeout() {
  return (
    <div>
      <Link className="nav-link" to={"/"}>
        Who we are
      </Link>
      <Link className="nav-link" to={"/"}>
        Our team
      </Link>
    </div>
  )
}

export default AboutLoyeout
