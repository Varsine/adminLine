import React from "react"
import {Link} from "react-router-dom"

function FinancialLoyeOut(props) {
  return (
    <div className="col-12">
      <Link className="nav-link" to={"/"}>
        Accounts Receivable{" "}
      </Link>
      <Link className="nav-link" to={"/"}>
        Accounts Payable{" "}
      </Link>
      <Link className="nav-link" to={"/"}>
        Credit Control{" "}
      </Link>
      <Link className="nav-link" to={"/"}>
        Financial Assistant{" "}
      </Link>
    </div>
  )
}

export default FinancialLoyeOut
