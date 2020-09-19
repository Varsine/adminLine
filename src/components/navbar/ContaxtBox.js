import React from "react"

export default function ContaxtBox() {
  return (
    <div className="col-3  row contact-box">
      <div className="phone-box">
        <a href="tel:07425173183" className="row contact-link" to={"/phone"}>
          <i className="fa fa-phone"></i>
          <p>07425173183</p>
        </a>

        <a href="tel:02034178500" className="contact-link" to={"/phone"}>
          <i className="fa fa-phone"></i>
          <p>02034178500</p>
        </a>
      </div>
      <div className="mail-box">
        <a href="/" className="contact-link">
          <i className="fa fa-envelope"></i>
          <p>info@adminline.co.uk</p>
        </a>
      </div>
    </div>
  )
}
