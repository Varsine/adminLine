import React, {useState, useEffect, useContext} from "react"
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/LoyeOut/Navbar"
import PageStart from "./components/pageStart/PageStart"
import Services from "./components/services/Services"
import {MyContext} from "./context/Context"
import Home from "./components/home/Home"
import About from "./components/about/About"
import OurTeam from "./components/about/OurTeam"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import "animate.css"

function App() {
  const [className, setclassName] = useState("")
  const scrollWindow = () => {
    if (
      (window.scrollY > 10 && window.scrollY < 300) ||
      (window.scrollY > 600 && window.scrollY < 1000) ||
      (window.scrollY > 1400 && window.scrollY < 1800) ||
      (window.scrollY > 2500 && window.scrollY < 3000) ||
      (window.scrollY > 3200 && window.scrollY < 3500)
    ) {
      setclassName("column-hover-move")
    } else {
      setclassName("column-move")
    }
  }

  window.addEventListener("scroll", scrollWindow)

  return (
    <Router>
      <MyContext.Provider value={{className, setclassName}}>
        <div className="scroll-move">
          <Navbar />
          <PageStart />
          <Services />
          <Home />
          <About />
          <OurTeam />
          <Contact />
          <Footer />
        </div>
      </MyContext.Provider>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default App
