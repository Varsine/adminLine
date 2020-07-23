import React, {useContext} from "react"
import AdministrativeServices from "./AdministrativeServices"
import FinancialServices from "./FinancialServices"
import CallServices from "./CallServices"
import {MyContext} from "../../context/Context"

function Services() {
  const {className, setclassName} = useContext(MyContext)
  return (
    <div className="services">
      <div id="services-content" className={className}>
        <h2>
          RECEPTIONIST, BOOKKEEPING AND <br /> CALL CENTER SERVICES
        </h2>
        <p>
          Being a business owner is not an easy task. Very often not being ready
          to employ in-house staff due to high employment costs you try to
          manage all things by yourself and eventually end-up with endless ”to
          do” list, anxiety and stress.
        </p>
        <p>
          And this is where Virtual Receptionist and Bookkeeping support lower
          costs can help.
        </p>
        <p>
          Think about how organized you can become. How much time and costs you
          can save.
        </p>
        <p>
          For an affordable monthly fee you will have all done and can
          concentrate and grow your business further which is the main purpose
          of every business owner.
        </p>
        <p>
          We have gathered a team of real professionals who are fluent in
          English and are based in Europe. They have higher education and a lot
          experience!
        </p>
      </div>
      <div className="services-boxes">
        <AdministrativeServices />
        <FinancialServices />
        <CallServices />
      </div>
    </div>
  )
}

export default Services
