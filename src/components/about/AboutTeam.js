import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {MyContext} from "../../context/Context"

function AboutTeam(props) {
  const {className, setclassName} = useContext(MyContext)

  return (
    <div className="about-content">
      <div id="about-content" className={className}>
        <h2>{props.header}</h2>
        <p className={props.classNameParagraf}>{props.context}</p>
        <Link className="row about-link" to={"about-us"}>
          <p> {props.link}</p>
        </Link>
      </div>
    </div>
  )
}

export default AboutTeam
