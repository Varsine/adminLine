import React, {useRef} from "react"
import {Link} from "react-router-dom"
import logo from "../../image/logo.png"
import ContaxtBox from "./ContaxtBox"
import Menu from "./Menu"

const Navabar = () => {
  const menuref = useRef()
  const navBarRef = useRef()
  const mobileMenu = useRef()

  const clickMenu = () => {
    if (window.screen.availWidth > 767) {
      menuref.current.classList.toggle("nav-bottom-menu")
      menuref.current.classList.remove("menu-list-blok")
      navBarRef.current.classList.remove("larg-nav-bar")
    } else {
      navBarRef.current.classList.toggle("larg-nav-bar")
      menuref.current.classList.remove("nav-bottom-menu")
      menuref.current.classList.toggle("menu-list-blok")
      mobileMenu.current.classList.toggle("mobile-nav-bar")
    }
  }

  return (
    <div className="navbar-parent">
      <div className="col-12 row nav-bar" ref={navBarRef}>
        <div>
          <Link to="/" className="row hidden-menu" onClick={clickMenu}>
            <i className="fas fa-align-justify"></i>
          </Link>
        </div>

        <div className="col-3 row logo">
          <Link to={"/"}>
            <img src={logo} alt="Admin-logo" />
          </Link>
        </div>
        <div style={{display: "none"}} ref={mobileMenu}>
          <Menu />
        </div>
        <div className="col-6 menu-list">
          <Menu />
        </div>
        <ContaxtBox />
      </div>
      <div style={{display: "none"}} ref={menuref}>
        <Menu />
      </div>
    </div>
  )
}

export default Navabar
