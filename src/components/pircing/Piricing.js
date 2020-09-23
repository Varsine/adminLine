import React from "react"

import PricingTable from "./PricingTable"

import "./Piricing.css"

const Piricing = () => {
  return (
    <div className="pricing">
      <h1>You do your business. We do the rest</h1>
      <h2>
        Choose the service that’s best for <span>You</span>
      </h2>
      <div>
        <PricingTable />
      </div>
      <div className="pricing-content">
        <h1>Need another plan?</h1>
        <h3>
          We can customize all our plans to suit your needs. Contact us for
          pricing and more information!
        </h3>
        <div>
          <a href="/adminLine/#contact">Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Piricing
