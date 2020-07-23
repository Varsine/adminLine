import React from "react"
import ServicesBox from "./ServicesBox"
import icon4 from "../../image/box-icon-4.png"
import icon5 from "../../image/box-icon-5.png"
import icon6 from "../../image/box-icon-6.png"
import icon7 from "../../image/box-icon-7.png"

export default function FinancialServices() {
  return (
    <div style={{marginLeft: "12px"}}>
      <h1 style={{paddingTop: "160px"}}>finansial SERVICES</h1>
      <ServicesBox
        path="/services/accounts-receivable"
        className="services-box-smoll"
        src={icon4}
        content="accounts receivable"
      />
      <ServicesBox
        path="/services/accounts-payable"
        className="services-box-smoll"
        src={icon5}
        content="accounts payable"
      />
      <ServicesBox
        path="/services/credit-control"
        className="services-box-smoll"
        src={icon6}
        content="credit control"
      />
      <ServicesBox
        path="/services/financial-assistant"
        className="services-box-smoll"
        src={icon7}
        content="financial ASSISTENT"
      />
    </div>
  )
}
