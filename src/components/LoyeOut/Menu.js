import React from "react"
import {Link} from "react-router-dom"
import ServicesLoyeOut from "./ServicesLoyeOut"

function Menu() {
  return (
    <div className="nav-div">
      <ul className="nav">
        <li>
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-link" to={"/services"}>
            Services <span>⌵</span>
          </Link>
          <ServicesLoyeOut />
        </li>
        <li>
          {" "}
          <Link className="nav-link" to={"/about"}>
            About us <span>⌵</span>
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-link" to={"/pricing"}>
            Pricing
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-link" to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
