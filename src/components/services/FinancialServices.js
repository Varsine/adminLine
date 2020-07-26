import React from "react"
import ServicesBox from "./ServicesBox"
import icon4 from "../../image/box-icon-4.png"
import icon5 from "../../image/box-icon-5.png"
import icon6 from "../../image/box-icon-6.png"
import icon7 from "../../image/box-icon-7.png"

export default function FinancialServices() {
  return (
    <div className="col-12 service-box-path">
      <h1>finansial SERVICES</h1>
      <div>
        {" "}
        <ServicesBox
          parentClassName="col-3"
          path="/services/accounts-receivable"
          className="services-box-smoll"
          src={icon4}
          content="accounts receivable"
        />
        <ServicesBox
          parentClassName="col-3"
          path="/services/accounts-payable"
          className="services-box-smoll"
          src={icon5}
          content="accounts payable"
        />
        <ServicesBox
          parentClassName="col-3"
          path="/services/credit-control"
          className="services-box-smoll"
          src={icon6}
          content="credit control"
        />
        <ServicesBox
          parentClassName="col-3"
          path="/services/financial-assistant"
          className="services-box-smoll"
          src={icon7}
          content="financial ASSISTENT"
        />
      </div>
    </div>
  )
}
