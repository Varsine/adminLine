import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import VirtualReceptionist from "./components/ServicesMenu/VirtualReceptionist"
import MainPage from "./components/mainPage/MainPage"

import PersonalAssistant from "./components/ServicesMenu/PersonalAssistant"
import AdministrativeAssistant from "./components/ServicesMenu/AdministrativeAssistant"
import AccountsReceivable from "./components/ServicesMenu/AccountsReceivable"
import AccountsPayable from "./components/ServicesMenu/AccountsPayable"
import CreditControl from "./components/ServicesMenu/CreditControl"
import FinancialAssistant from "./components/ServicesMenu/FinancialAssistant"
import Footer from "./components/footer/Footer"
import WhoWeAre from "./components/aboutMenu/WhoWeAre"
import MenuOurTeam from "./components/aboutMenu/MenuOurTeam"
import Piricing from "./components/pircing/Piricing"
import NotFound from "./components/notFound/NotFound"

import "./App.css"
import "./Responsive.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/adminLine">
            <MainPage />
          </Route>
          <Route exact path="/adminLine/services-virtual-receptionist">
            <VirtualReceptionist />
          </Route>
          <Route exact path="/adminLine/personal-assistent">
            <PersonalAssistant />
          </Route>
          <Route exact path="/adminLine/administrativ-assistent">
            <AdministrativeAssistant />
          </Route>
          <Route exact path="/adminLine/account-receivable">
            <AccountsReceivable />
          </Route>
          <Route exact path="/adminLine/account-payable">
            <AccountsPayable />
          </Route>
          <Route exact path="/adminLine/credit-control">
            <CreditControl />
          </Route>
          <Route exact path="/adminLine/financial-assistent">
            <FinancialAssistant />
          </Route>
          <Route exact path="/adminLine/who-we-are">
            <WhoWeAre />
          </Route>
          <Route exact path="/adminLine/our-team">
            <MenuOurTeam />
          </Route>
          <Route exact path="/adminLine/pricing">
            <Piricing />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
