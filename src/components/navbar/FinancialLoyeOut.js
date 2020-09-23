import React from "react"
import {Link} from "react-router-dom"

function FinancialLoyeOut(props) {
  return (
    <div className="col-12">
      <Link className="nav-link" to="/adminLine/account-receivable">
        Accounts Receivable{" "}
      </Link>
      <Link className="nav-link" to="/adminLine/account-payable">
        Accounts Payable{" "}
      </Link>
      <Link className="nav-link" to="/adminLine/credit-control">
        Credit Control{" "}
      </Link>
      <Link className="nav-link" to="/adminLine/financial-assistent">
        Financial Assistant{" "}
      </Link>
    </div>
  )
}

export default FinancialLoyeOut
