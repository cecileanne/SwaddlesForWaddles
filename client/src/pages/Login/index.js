import React from "react";
// import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
// import Jumbotron from "../../components/Jumbotron";
import { SubmitBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import "./style.css";
function Login() {
  // const [isLoginOpen, loginIsOpen] = useState(false);
  return (
    <div className="main-swaddle-container">
      <div className="login-container">
        <Navbar className="navbar" />
        <h1 className="login">LOGIN</h1>
        <div className="logo-wrapper">
          <img
            className="mainlogo"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/icons/swaddles_for_waddles_logo.png"
            }
          />
        </div>

        <form className="login-form">
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

          <SubmitBtn
          // disabled={!(this.state.author && this.state.title)}
          // onClick={this.handleFormSubmit}
          >
            Login
          </SubmitBtn>
        </form>
        <p className="suggestion">
          Don't have an account? Register <a href="/register">here</a>
        </p>
      </div>
      <div className="swaddle-text">
        <h1 className="swaddleee">SWADDLES FOR WADDLES</h1>
      </div>
    </div>
  );
}

export default Login;
