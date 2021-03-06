import React, {useContext} from "react"
import HomePageBox from "./HomePageBox"
import {MyContext} from "../../context/Context"

const Home = () => {
  const {className} = useContext(MyContext)

  return (
    <div className="row home-page">
      <div id="home-page-content" className={className} style={{padding: "5% 2%"}}>
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
      <div className="col-6 home-page-boxes">
        <HomePageBox />
      </div>
    </div>
  )
}
export default Home
