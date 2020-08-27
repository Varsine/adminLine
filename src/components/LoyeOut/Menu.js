import React, {useRef} from "react"
import {Link} from "react-router-dom"
import ServicesLoyeOut from "./ServicesLoyeOut"
import AdministrativLoyeOut from "./AdministrativLoyeOut"
import FinancialLoyeOut from "./FinancialLoyeOut"
import AboutLoyeout from "./AboutLoyeout"

function Menu() {
  const alerServicetRef = useRef()
  const alertAdminRef = useRef()
  const alertFinancRef = useRef()
  const alertAboutRef = useRef()

  const clickServices = () => {
    alerServicetRef.current.classList.toggle("menu-alert-service")
    alertAboutRef.current.classList.remove("menu-alert-about")
    alertFinancRef.current.classList.remove("menu-alert-financ-service")
    alertAdminRef.current.classList.remove("menu-alert-admin-service")
  }
  const clickAdmin = () => {
    alertAdminRef.current.classList.toggle("menu-alert-admin-service")
    alertFinancRef.current.classList.remove("menu-alert-financ-service")
  }
  const clickFinance = () => {
    alertAdminRef.current.classList.remove("menu-alert-admin-service")
    alertFinancRef.current.classList.toggle("menu-alert-financ-service")
  }
  const clickAbout = () => {
    alertAboutRef.current.classList.toggle("menu-alert-about")
    alerServicetRef.current.classList.remove("menu-alert-service")
    alertAdminRef.current.classList.remove("menu-alert-admin-service")
    alertFinancRef.current.classList.remove("menu-alert-financ-service")
  }
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
            Services <span onClick={clickServices}>⌵</span>
          </Link>
        </li>
        <li>
          {" "}
          <Link className="nav-link" to={"/about"}>
            About us <span onClick={clickAbout}>⌵</span>
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
      <div className="alert-menu">
        <div ref={alerServicetRef} style={{display: "none"}}>
          <ServicesLoyeOut clickAdmin={clickAdmin} clickFinanc={clickFinance} />
        </div>
        <div ref={alertAdminRef} style={{display: "none"}}>
          <AdministrativLoyeOut />
        </div>
        <div ref={alertFinancRef} style={{display: "none"}}>
          <FinancialLoyeOut />
        </div>
        <div ref={alertAboutRef} style={{display: "none"}}>
          <AboutLoyeout />
        </div>
      </div>
    </div>
  )
}

export default Menu
