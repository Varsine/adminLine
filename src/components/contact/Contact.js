import React from "react"
import ContactInfo from "./ContactInfo"
import ContactInputBox from "./ContactInputBox"
import Map from "./Map"
function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <p>Ready to discuss your business?</p>
        <p>We’d love to hear about it.</p>
      </div>
      <div className="contact-data">
        <div className="contact-info-box">
          <ContactInfo />
          <ContactInputBox />
        </div>
        <Map />
      </div>
    </div>
  )
}

export default Contact
