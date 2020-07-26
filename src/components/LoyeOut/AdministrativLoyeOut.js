import React from "react"
import {Link} from "react-router-dom"

function AdministrativLoyeOut(props) {
  return (
    <div>
      <Link className="nav-link nav-link-larg" to={"/"}>
        Virtual Receptionist service
      </Link>
      <Link className="nav-link" to={"/"}>
        Personal assistant{" "}
      </Link>
      <Link className="nav-link nav-link-larg" to={"/"}>
        Administrative assistant{" "}
      </Link>
    </div>
  )
}

export default AdministrativLoyeOut
