import React from "react"

import FlipCard from "./FlipCard"
import {FlipCardData} from "./FlipCardData"

import "./AboutMenu.css"

const MenuOurTeam = () => {
  return (
    <div className="menu-our-team">
      <h1>We are happy, what we do!</h1>
      <div className="out-team-flip-card">
        {FlipCardData.map((val, index, arr) => {
          const {src, name, profession, history} = arr[index]
          return (
            <FlipCard
            key={`${index}-${val}`}
              src={src}
              name={name}
              profession={profession}
              history={history}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MenuOurTeam
