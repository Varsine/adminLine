import React from "react"
import {Link} from "react-router-dom"
import logo from "../../image/logo.png"
import ContaxtBox from "./ContaxtBox"
import Menu from "./Menu"

const Navabar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="Admin-logo" />
        </Link>
      </div>
      <Menu />
      <ContaxtBox />
    </div>
  )
}

export default Navabar
