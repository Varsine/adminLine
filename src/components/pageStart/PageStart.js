import React, {useContext} from "react"
import {MyContext} from "../../context/Context"

export default function Home() {
  const {className, setclassName} = useContext(MyContext)

  return (
    <div className="start-page">
      <div id="start-page-content" className={className}>
        <h2>You do your business. </h2>
        <h2>We do the rest.</h2>
        <h3>
          Remote admin and bookkeeping support for <br />
          entrepreneurs, small and medium sized businesses <br /> with
          revolutionary price.
        </h3>
        <h4>Get organized. Save time. Save costs.</h4>
      </div>
    </div>
  )
}
