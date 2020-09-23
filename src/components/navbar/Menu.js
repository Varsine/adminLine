import React, {useRef, useLayoutEffect} from "react"
import {Link} from "react-router-dom"
import ServicesLoyeOut from "./ServicesLoyeOut"
import AdministrativLoyeOut from "./AdministrativLoyeOut"
import FinancialLoyeOut from "./FinancialLoyeOut"
import AboutLoyeout from "./AboutLoyeout"

function Menu({menuref, navBarRef}) {
  const alerServicetRef = useRef()
  const alertAdminRef = useRef()
  const alertFinancRef = useRef()
  const alertAboutRef = useRef()
  const callServicesRef = useRef()
  const pricingRef = useRef()

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

  useLayoutEffect(() => {
    const removeMenuSection = (event) => {
      if (
        alertAdminRef.current.contains(event.target) ||
        alertFinancRef.current.contains(event.target) ||
        alertAboutRef.current.contains(event.target) ||
        callServicesRef.current.contains(event.target) ||
        pricingRef.current.contains(event.target)
      ) {
        alertFinancRef.current.classList.remove("menu-alert-financ-service")
        alerServicetRef.current.classList.remove("menu-alert-service")
        alertAdminRef.current.classList.remove("menu-alert-admin-service")
        alertAboutRef.current.classList.remove("menu-alert-about")
        if (menuref) {
          menuref.current.classList.remove("nav-bottom-menu")
          menuref.current.classList.remove("menu-list-blok")
          navBarRef.current.classList.remove("larg-nav-bar")
        }
      }
    }

    document.addEventListener("click", removeMenuSection)
    return () => {
      document.removeEventListener("click", removeMenuSection)
    }
  })

  return (
    <div className="nav-div">
      <ul className="nav">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <div className="nav-link" onClick={clickServices}>
            Services <span>⌵</span>
          </div>
        </li>
        <li>
          <div className="nav-link" onClick={clickAbout}>
            About us <span>⌵</span>
          </div>
        </li>
        <li>
          {" "}
          <Link className="nav-link" to="/pricing" ref={pricingRef}>
            Pricing
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="alert-menu">
        <div ref={alerServicetRef} style={{display: "none"}}>
          <ServicesLoyeOut
            callServicesRef={callServicesRef}
            clickAdmin={clickAdmin}
            clickFinanc={clickFinance}
          />
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
