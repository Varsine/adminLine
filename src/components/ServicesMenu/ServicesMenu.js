import React from "react"

const ServicesMenu = ({header, paragrafOne, paragrafTwo, list, src}) => {
  return (
    <div className="services-menu-parent">
    <div className="services-menu-page">
      <div className="services-menu-page-left-path">
        <h2>{header}</h2>
        <div>
          {paragrafOne.map((val, index) => {
            return <p key={index}>{val}</p>
          })}
        </div>
        <p><strong>{paragrafTwo}</strong></p>
        <ul>
          {list.map((val, index) => {
            return <li key={index}>{val}</li>
          })}
        </ul>
      </div>
      <div className="services-menu-page-right-path">
        <img src={src} alt="" />
      </div>
    </div>
    </div>
  )
}
export default ServicesMenu
