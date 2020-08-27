import React, {useContext} from "react"
import {MyContext} from "../../context/Context"

export default function Header() {
  const {className} = useContext(MyContext)

  return (
    <div className="col-12 row start-page">
      <div id="start-page-content" className={className}>
        <div style={{padding: "5% 2%", marginTop:"3%"}}>
          <h2>You do your business. </h2>
          <h2>We do the rest.</h2>
          <h3>
            Remote Receptionist, Bookkeeping and Call Center support for
            entrepreneurs, small and medium sized businesses with revolutionary
            price.
          </h3>
          <h4>Get organized. Save time. Save costs.</h4>
        </div>
      </div>
    </div>
  )
}
