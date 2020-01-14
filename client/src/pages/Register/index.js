import React from "react";
// import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
// import Jumbotron from "../../components/Jumbotron";
import { SubmitBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import "./style.css";
function Register() {
  return (
    <div className="main-swaddle-container">
      <div className="main-container">
        <Navbar />
        <h1 className="register">REGISTER</h1>
        <div className="logo-wrapper">
          <img
            className="mainlogo"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/icons/swaddles_for_waddles_logo.png"
            }
          />
        </div>
        <form className="register-form">
          <Input
            // value={this.state.title}
            // onChange={this.handleInputChange}
            name="Name"
            placeholder="Name (required)"
          />
          <Input
            // value={this.state.author}
            // onChange={this.handleInputChange}
            name="Email"
            placeholder="Email (required)"
          />
          <Input
            // value={this.state.author}
            // onChange={this.handleInputChange}
            name="Password"
            placeholder="Password (required)"
          />
          <Input
            // value={this.state.author}
            // onChange={this.handleInputChange}
            name="Confirm Password"
            placeholder="Confirm Password (required)"
          />

          <SubmitBtn
          // disabled={!(this.state.author && this.state.title)}
          // onClick={this.handleFormSubmit}
          >
            Register
          </SubmitBtn>
        </form>
      </div>
      <div className="swaddle-text">
        <h1 className="swaddleee">SWADDLES FOR WADDLES</h1>
      </div>
    </div>
  );
}

export default Register;
