import React, {useState} from "react"
import {MyContext} from "../../context/Context"

import Services from "../services/Services"
import Home from "../home/Home"
import About from "../about/About"
import OurTeam from "../about/OurTeam"
import Contact from "../contact/Contact"
import Header from "../header/Header"


function MainPage() {
  const [className, setclassName] = useState("column-move col-5")
  const scrollWindow = () => {
    if (
      (window.scrollY > 10 && window.scrollY < 300) ||
      (window.scrollY > 800 && window.scrollY < 1200) ||
      (window.scrollY > 1600 && window.scrollY < 1900) ||
      (window.scrollY > 2600 && window.scrollY < 3000) ||
      (window.scrollY > 3400 && window.scrollY < 3800)
    ) {
      setclassName("column-hover-move col-5")
    } else {
      setclassName("column-move col-5")
    }
  }

  window.addEventListener("scroll", scrollWindow)

  return (
      <MyContext.Provider value={{className, setclassName}}>
        <div className="scroll-move">
          <Header />
          <Services />
          <Home />
          <About />
          <OurTeam />
          <Contact />
        </div>
      </MyContext.Provider>
  )
}

export default MainPage
