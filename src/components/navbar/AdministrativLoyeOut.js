import React from "react"
import {Link} from "react-router-dom"

function AdministrativLoyeOut() {
  return (
    <div>
      <Link
        className="nav-link nav-link-larg"
        to={"/adminLine/services-virtual-receptionist"}
      >
        Virtual Receptionist
        <br /> service
      </Link>
      <Link className="nav-link" to="/adminLine/personal-assistent">
        Personal assistant
      </Link>
      <Link
        className="nav-link nav-link-larg"
        to="/adminLine/administrativ-assistent"
      >
        Administrative
        <br />
        assistant
      </Link>
    </div>
  )
}

export default AdministrativLoyeOut
