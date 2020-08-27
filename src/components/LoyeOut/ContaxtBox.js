import React from "react"
import {Link} from "react-router-dom"

export default function ContaxtBox() {
  return (
    <div className="col-3  row contact-box">
      <div className="phone-box">
        <Link className="row contact-link" to={"/phone"}>
          <i className="fa fa-phone"></i>
          <p>07425173183</p>
        </Link>

        <Link className="contact-link" to={"/phone"}>
          <i className="fa fa-phone"></i>
          <p>02034178500</p>
        </Link>
      </div>
      <div className="mail-box">
        <Link className="contact-link" to={"/mail"}>
          <i className="fa fa-envelope"></i>
          <p>info@adminline.co.uk</p>
        </Link>
      </div>
    </div>
  )
}
