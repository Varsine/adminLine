import React, {useState} from "react"

function MembersBox(props) {
  const [context, setcontext] = useState(props.name)
  const [className, setclassName] = useState("team-infobox-link")
  const handlerMouseMove = () => {
    setcontext(props.position)
  }
  const handlerMouseOut = () => {
    setcontext(props.name)
  }
  const [idHover, setidHover] = useState(null)
  const handlerMouseMoveMembersBox = () => {
    setidHover("team-id-hover")
    setclassName(null)
  }
  const handlerMouseOutMembersBox = () => {
    setidHover(null)
    setclassName("team-infobox-link")
  }

  return (
    <div
      className="members-box"
      onMouseOut={handlerMouseOutMembersBox}
      onMouseMove={handlerMouseMoveMembersBox}
    >
      <div className="team-thumb">
        <img
          src={props.src}
          alt={props.alt}
          onMouseMove={handlerMouseMove}
          onMouseOut={handlerMouseOut}
        />
      </div>
      <div className="team-infobox">
        <h3>
          {context.length < 15 ? (
            <a href="/#header" className={className} id={idHover}>
              {context}
            </a>
          ) : (
            <a href="/#header" id="position-hover">
              {context}
            </a>
          )}
        </h3>
      </div>
    </div>
  )
}

export default MembersBox
