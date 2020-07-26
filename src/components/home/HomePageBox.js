import React from "react"
import ServicesBox from "../services/ServicesBox"
import icon1 from "../../image/home-box-1.png"
import icon2 from "../../image/home-box-2.png"
import icon3 from "../../image/home-box-3.png"

export default function HomePageBox() {
  return (
    <div className="home-boxes row">
      <ServicesBox
        parentClassName="col-4"
        path="/home/your-costs"
        className="services-box-great"
        src={icon1}
        content="You will reduce your co"
        paragraf="You will not pay any employment obligations, taxes or contracts, just a fixed monthly fee."
      />
      <ServicesBox
        parentClassName="col-4"
        path="/home/your-work"
        className="services-box-great"
        src={icon2}
        content="Your work will be completed with dedicated and trained staff"
        paragraf="All our employees are armed with our values and are ready to distribute the highest quality service."
      />
      <ServicesBox
        parentClassName="col-4"
        path="/home/experience"
        className="services-box-great"
        src={icon3}
        content="Multi-Industry experience"
        paragraf="We have worked with various industries and have proven methodologies to make your work done effectively."
      />
    </div>
  )
}
