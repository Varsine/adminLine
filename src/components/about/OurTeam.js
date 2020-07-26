import React from "react"
import AboutTeam from "./AboutTeam"
import SectionTeam from "./SectionTeam"

function OurTeam() {
  return (
    <div className="about-us row">
      <div className="our-about">
        <AboutTeam
          header="Meet Our Team"
          context="A perfect blend of knowledge, experience and passion. 
The best people formula for the best administrative and financial assistance!"
          link="VIEW ALL"
          classNameParagraf="about-paragraf"
        />
      </div>
      <SectionTeam />
    </div>
  )
}

export default OurTeam
