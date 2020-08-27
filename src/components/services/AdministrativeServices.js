import React from "react"
import ServicesBox from "./ServicesBox"
import icon1 from "../../image/box-icon-1.png"
import icon2 from "../../image/box-icon-2.png"
import icon3 from "../../image/box-icon-3.png"

export default function AdministrativeServices() {
  return (
    <div className="service-box-path">
      <h1>ADMINISTRATIVE SERVICES</h1>
      <div>
        <ServicesBox
          parentClassName="col-4"
          path="/services/receptionist"
          className="services-box"
          src={icon1}
          content="RECEPTIONIST"
        />
        <ServicesBox
          parentClassName="col-4"
          path="/services/personal-assistant"
          className="services-box"
          src={icon2}
          content="PERSONAL ASSISTANT"
        />
        <ServicesBox
          parentClassName="col-4"
          path="/services/administrative-assistant"
          className="services-box"
          src={icon3}
          content="ADMINISTRATIV ASSISTENT"
        />
      </div>
    </div>
  )
}
