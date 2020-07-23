import React from "react"
import MembersBox from "./MembersBox"
import Monic from "../../image/Monic.jpg"
import Marina from "../../image/Marina.jpg"
import Silvia from "../../image/Silvia.jpg"
import Tatev from "../../image/Tatev.jpg"
import Vardan from "../../image/Vardan.jpg"
import Ally from "../../image/Ally.jpg"

function SectionTeam() {
  return (
    <div className="our-team">
      <MembersBox
        src={Monic}
        alt={Monic}
        name="Monic"
        position="Operations Manager"
      />
      <MembersBox
        src={Tatev}
        alt={Tatev}
        name="Tatev"
        position="HR & Administration  Manager"
      />
      <MembersBox src={Marina} alt={Marina} name="Marina" position="CMO" />
      <MembersBox src={Ally} alt={Ally} name="Ally" position="Receptionist " />
      <MembersBox
        src={Silvia}
        alt={Silvia}
        name="Silvia"
        position="Accounts Receivable Clerk"
      />
      <MembersBox
        src={Vardan}
        alt={Vardan}
        name="Vardan"
        position="Financial assistant"
      />
    </div>
  )
}

export default SectionTeam
