import React, {useState} from "react"
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/LoyeOut/Navbar"
import Services from "./components/services/Services"
import {MyContext} from "./context/Context"
import Home from "./components/home/Home"
import About from "./components/about/About"
import OurTeam from "./components/about/OurTeam"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import "./Responsive.css"
import Header from "./components/header/Header"

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
      setclassName("column-hover-move col-5")
    } else {
      setclassName("column-move col-5")
    }
  }

  window.addEventListener("scroll", scrollWindow)

  return (
    <Router>
      <MyContext.Provider value={{className, setclassName}}>
        <div className="scroll-move">
          <Navbar />
          <Header />
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
