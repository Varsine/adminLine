import React from "react"
import {Link} from "react-router-dom"

export default function ServicesBox({
  parentClassName,
  className,
  path,
  src,
  content,
  paragraf,
}) {
  return (
    <div className={parentClassName}>
      <Link to={path} className="service-box-link" >
        <div className={className}>
          <div>
            <img src={src} alt="" />
          </div>
          <h3>{content}</h3>
          <p>{paragraf}</p>
        </div>
      </Link>
    </div>
  )
}
