import React from "react"
import {Link} from "react-router-dom"

function AboutLoyeout() {
  return (
    <div>
      <Link className="nav-link" to='/who-we-are'>
        Who we are
      </Link>
      <Link className="nav-link" to="/our-team">
        Our team
      </Link>
    </div>
  )
}

export default AboutLoyeout
