import React from "react"
import {Link} from "react-router-dom"

function ServicesLoyeOut() {
  return (
    <div className="services-loyuot" style={{display: "none"}}>
      <ul>
        <li>
          <Link className="nav-link">Administrative services</Link>
          <ul>
            <li>
              <Link className="nav-link">Virtual Receptionist Service</Link>
            </li>
            <li>
              <Link className="nav-link">Personal assistant</Link>
            </li>
            <li>
              <Link className="nav-link">Administrative assistant</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="nav-link">Financial services</Link>
          <ul>
            <li>
              <Link className="nav-link">Accounts Receivable</Link>
            </li>
            <li>
              <Link className="nav-link">Accounts Payable</Link>
            </li>
            <li>
              <Link className="nav-link">Credit Control</Link>
            </li>

            <li>
              <Link className="nav-link">Financial Assistant</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="nav-link">Call center services</Link>
        </li>
      </ul>
    </div>
  )
}

export default ServicesLoyeOut
