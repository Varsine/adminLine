import React from "react"

import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <p>
          <span>Oops!...</span> This page not found.
        </p>
      </div>
      <img
        src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/heart-health/tired-runner-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=5E861CCD1705C823E7C8E4E06D7D5B14ACA6F97A"
        alt=""
      />
    </div>
  )
}

export default NotFound
