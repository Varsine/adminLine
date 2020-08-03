import React from "react"
import AboutTeam from "./AboutTeam"
import about from "../../image/About-Us.jpg"

function About() {
  return (
    <div className="about-us row ">
      <AboutTeam
        header="OUR STORY"
        context="As administrative and financial operations are essential part of any
            business and while seeing how most of the business owners,
            overwhelmed with their day to day office operations, are in need of
            additional support, we realized that something should be changed. We
            believed they need someone to care their administrative and
            financial tasks with the affordable price. AdminLine was founded
            with the simple mission and lofty objective: to offer Virtual
            Receptionist, Bookkeeping and Call Center support with extraordinary
            price."
        link="READ MORE"
      />
      <div className="about-right-column">
        <img src={about} alt="" />
      </div>
    </div>
  )
}

export default About
