import React, { Component } from "react";
import { Input } from "../../components/Form";
import Navbar from "../../components/Navbar";
import "./style.css";
import axios from "axios";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  componentDidMount() {
    let accessString = localStorage.getItem("JWT");
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true
      });
    } else {
      console.log(accessString);
      axios
        .get("/auth/findUser", {
          params: { username: localStorage.getItem("email") },
          headers: { Authorization: `JWT ${accessString}` }
        })
        .then(res => {
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            username: res.data.username,
            isLoading: true,
            error: false
          });
          console.log(this.state);
        })
        .catch(err => console.log(err.data));
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };
  handleFormSubmit = event => {
    event.preventDefault();

    axios.post("/auth/registerUser", this.state).then(res => {
      
      localStorage.setItem("JWT", res.data.token);
      localStorage.setItem("email", res.data.username);
      localStorage.setItem("userId", res.data.userId);
      console.log(res.data);
      // this.props.history.push("/Swaddle");
    });
  };
  render = () => {
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
          <form>
            <Input
              value={this.state.firstName}
              changeHandler={this.handleInputChange}
              name="firstName"
              placeholder="First Name (required)"
            />
            <Input
              value={this.state.lastName}
              changeHandler={this.handleInputChange}
              name="lastName"
              placeholder="Last Name (required)"
            />
            <Input
              value={this.state.username}
              changeHandler={this.handleInputChange}
              name="username"
              placeholder="Email (required)"
            />
            <Input
              value={this.state.password}
              changeHandler={this.handleInputChange}
              name="password"
              placeholder="Password (required)"
              type="password"
            />
            <Input
              value={this.state.confirmPassword}
              changeHandler={this.handleInputChange}
              name="confirmPassword"
              placeholder="Confirm Password (required)"
              type="password"
            />

            <button
              // disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Register
            </button>
          </form>
        </div>
        <div className="swaddle-text">
          <h1 className="swaddleee">SWADDLES FOR WADDLES</h1>
        </div>
      </div>
    );
  };
}
export default Register;
