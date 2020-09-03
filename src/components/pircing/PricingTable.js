import React from "react"

import {pricingDataTbody, pricingDataThead} from "./PricingData"

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <h3>Monthly rates</h3>
      <table>
        <thead>
          <tr>
            <div>
              {pricingDataThead.map((val, index) => {
                return (
                  <th key={`${index}-${val}`}>
                    <p>{val}</p>
                  </th>
                )
              })}
            </div>
          </tr>
        </thead>
        <tbody>
          {" "}
          <tr>
            {pricingDataTbody.map((value, ind) => {
              return (
                <div key={`${ind}-${value}`}>
                  {value.map((val, index) => {
                    return <td key={`${index}-${val}`}>{val}</td>
                  })}
                </div>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PricingTable
