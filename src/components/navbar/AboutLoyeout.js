import React from "react"
import {Link} from "react-router-dom"

function AboutLoyeout() {
  return (
    <div>
      <Link className="nav-link" to="/adminLine/who-we-are">
        Who we are
      </Link>
      <Link className="nav-link" to="/adminLine/our-team">
        Our team
      </Link>
    </div>
  )
}

export default AboutLoyeout
