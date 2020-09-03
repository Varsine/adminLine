import React from "react"

const FlipCard = ({
  src,
  name,
  profession,
  history,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <img src={src} alt="" />
          </div>
          <h3>{name}</h3>
          <p>{profession}</p>
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>{history}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
