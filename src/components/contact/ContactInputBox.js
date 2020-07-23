import React from "react"
import Input from "./Input"

class ContactInputBox extends React.Component {
  state = {
    name: "",
    email: "",
    tel: "",
    subject: "",
    nameFiald: "",
    emailFiald: "",
    telFiald: "",
    subjectFiald: "",
    inputId: "",
    loding: "",
    alertBox: "",
    sendText: "",
  }
  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  validate = () => {
    const {name, email, tel} = this.state
    const emptyText = "The field is required."

    if (name === "") {
      this.setState({
        nameFiald: emptyText,
      })
    } else {
      this.setState({
        nameFiald: "",
      })
    }
    if (email === "") {
      this.setState({
        emailFiald: emptyText,
      })
    } else if (!email.includes("@")) {
      this.setState({emailFiald: "The e-mail address entered is invalid."})
    } else {
      this.setState({
        emailFiald: "",
      })
    }
    if (tel === "") {
      this.setState({
        telFiald: emptyText,
      })
    } else if (!Number(tel)) {
      this.setState({
        telFiald: "The telephone number is invalid.",
      })
    } else {
      this.setState({
        telFiald: "",
      })
    }
  }
  handlerSubmit = (e) => {
    e.preventDefault()
    const lodingSend = this.setState({
      loding: "loding-send",
    })
    this.validate()
    const {name, email, tel, nameFiald, emailFiald, telFiald} = this.state
    if (
      !tel == "" &&
      !name == "" &&
      !email == "" &&
      nameFiald === "" &&
      emailFiald === "" &&
      telFiald === ""
    ) {
      this.setState({
        alertBox: "send-massage",
        sendText: "Thank you for your message. It has been sent.",
      })
    } else {
      this.setState({
        inputId: "input-id",
        alertBox: "error-massage",
        sendText:
          "One or more fields have an error. Please check and try again.",
      })
    }
  }
  render() {
    const {nameFiald, emailFiald, telFiald, subjectFiald} = this.state
    return (
      <div>
        <form
          className="input-box-form"
          onSubmit={this.handlerSubmit}
          method="post"
        >
          <Input
            type="text"
            inputId={this.state.inputId}
            placeholder="Name"
            name="name"
            onChange={this.handlerChange}
            fieldText={nameFiald}
          />
          <Input
            type="text"
            inputId={this.state.inputId}
            placeholder="Email"
            name="email"
            onChange={this.handlerChange}
            fieldText={emailFiald}
          />
          <Input
            type="tel"
            inputId={this.state.inputId}
            placeholder="Phone Number"
            name="tel"
            onChange={this.handlerChange}
            fieldText={telFiald}
          />
          <Input
            type="text"
            inputId={this.state.inputId}
            placeholder="Subject"
            name="subject"
            onChange={this.handlerChange}
            fieldText={subjectFiald}
          />
          <span>
            <textarea placeholder="Message"></textarea>
          </span>
          <span>
            <input
              type="submit"
              //   onClick={() => this.setState({loding: "loding"})}
              value="Send"
              className="input-box-submit"
            />
            <span className={this.state.loding}></span>
          </span>
          <div
            className={this.state.alertBox}
            style={{color: "white"}}
            role="alert"
          >
            {this.state.sendText}
          </div>
        </form>
      </div>
    )
  }
}

export default ContactInputBox
