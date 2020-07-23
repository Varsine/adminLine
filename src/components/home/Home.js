import React, {useContext} from "react"
import HomePageBox from "./HomePageBox"
import {MyContext} from "../../context/Context"

const Home = () => {
  const {className, setclassName} = useContext(MyContext)

  return (
    <div className="home-page">
      <div className="home-page-content">
        <div id="home-page-content" className={className}>
          <h2>WHY OUTSOURCE TO ADMINLINE</h2>
          <p>Working with us you can</p>
          <ul>
            <li>
              get your day to day administrative and bookkeeping tasks done more
              effectively
            </li>
            <li>avoid the risks and obligations of employing in-house staff</li>
            <li>cut your labor costs UP TO 70%</li>
            <li>improve service quality and customer satisfaction</li>
            <li>be sure of smooth continuity of the service</li>
          </ul>
        </div>
      </div>
      <div className="home-page-boxes">
        <HomePageBox />
      </div>
    </div>
  )
}
export default Home
