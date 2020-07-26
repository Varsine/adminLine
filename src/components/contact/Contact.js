import React from "react"
import ContactInfo from "./ContactInfo"
import ContactInputBox from "./ContactInputBox"
import Map from "./Map"
function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-header row">
        <div>
          <p>Ready to discuss your business?</p>
          <p>We’d love to hear about it.</p>
        </div>
      </div>
      <div className="contact-data row">
        <div className="col-5 contact-info-box ">
          <ContactInfo />
          <ContactInputBox />
        </div>
        <Map />
      </div>
    </div>
  )
}

export default Contact
