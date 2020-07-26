import React from "react"
import {Link} from "react-router-dom"

export default function ContaxtBox() {
  return (
    <div className="col-3  row contact-box">
      <div className="phone-box">
        <Link className="contact-link" to={"/phone"}>
          <i className="fa fa-phone"></i>07425173183
        </Link>

        <Link className="contact-link" to={"/phone"}>
          <i className="fa fa-phone"></i>02034178500
        </Link>
      </div>
      <div className="mail-box">
        <Link className="contact-link" to={"/mail"}>
          <i className="fa fa-envelope"></i>
          onfo@adminline.co.uk
        </Link>
      </div>
    </div>
  )
}
