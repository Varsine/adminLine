import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {MyContext} from "../../context/Context"

function AboutTeam({context, header, classNameParagraf,link, to}) {
  const {className} = useContext(MyContext)

  return (
    <div className="about-content">
      <div id="about-content" className={className}>
        <h2>{header}</h2>
        <p className={classNameParagraf}>{context}</p>
        <Link className="row about-link" to={to}>
          <p> {link}</p>
        </Link>
      </div>
    </div>
  )
}

export default AboutTeam
