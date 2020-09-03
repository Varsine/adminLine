import React from "react"
import ServicesMenu from "./ServicesMenu"
import {servicesMenuObjectData} from "./ServisisMenuDataObject"

import "./ServicesMenu.css"

const VirtualReceptionist = () => {
  const {
    header,
    paragrafOne,
    paragrafTwo,
    list,
    src,
  } = servicesMenuObjectData[0]
  return (
    <div>
      <ServicesMenu
        header={header}
        paragrafOne={paragrafOne}
        paragrafTwo={paragrafTwo}
        list={list}
        src={src}
      />
    </div>
  )
}

export default VirtualReceptionist
