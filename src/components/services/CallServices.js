import React from "react"
import ServicesBox from "./ServicesBox"
import icon8 from "../../image/box-icon-8.png"
import icon9 from "../../image/box-icon-9.png"
import icon10 from "../../image/box-icon-10.png"
import icon11 from "../../image/box-icon-11.png"

export default function CallServices() {
  return (
    <div style={{marginLeft: "12px"}}>
      <h1 style={{paddingTop: "160px"}}>call center SERVICES</h1>
      <ServicesBox
        path="/services/customer-support"
        className="services-box-smoll"
        src={icon8}
        content="customer support"
      />
      <ServicesBox
        path="/services/live-chat-management"
        className="services-box-smoll"
        src={icon9}
        content="live chat management"
      />
      <ServicesBox
        path="/services/telemarketing"
        className="services-box-smoll"
        src={icon10}
        content="telemarketing"
      />
      <ServicesBox
        path="/services/sales-representative"
        className="services-box-smoll"
        src={icon11}
        content="sales representative"
      />
    </div>
  )
}
