import React from "react"
import {Link} from "react-router-dom"

function AdministrativLoyeOut() {
  return (
    <div>
      <Link
        className="nav-link nav-link-larg"
        to={"/services-virtual-receptionist"}
      >
        Virtual Receptionist
        <br /> service
      </Link>
      <Link className="nav-link" to="/personal-assistent">
        Personal assistant
      </Link>
      <Link className="nav-link nav-link-larg" to="/administrativ-assistent">
        Administrative
        <br />
        assistant
      </Link>
    </div>
  )
}

export default AdministrativLoyeOut
