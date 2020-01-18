import React, { Component } from "react";
import { Input } from "../../components/Form";
import Navbar from "../../components/Navbar";
import "./style.css";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    let accessString = localStorage.getItem("JWT");
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true
      });
    } else {
      axios
        .get("/auth/findUser", {
          params: {
            username: localStorage.getItem("email"),
            userId: localStorage.getItem("userId")
          },
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
        })
        .catch(err => console.log(err.data));
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => this.state);
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios.post("/auth/loginUser", this.state).then(res => {
      localStorage.setItem("JWT", res.data.token);
      localStorage.setItem("email", res.data.username);
      localStorage.setItem("userId", res.data.userId);
    });
    this.props.history.push("/Swaddle");
  };
  render = () => {
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
          <form>
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

            <button
              id="formBtn"
              onClick={this.handleFormSubmit}
              // disabled={!(this.state.author && this.state.title)}
            >
              Login
            </button>
          </form>

          <div className="suggestion">
            Don't have an account? Register <a href="/register">here</a>
          </div>
        </div>
        <div className="swaddle-text">
          <h1 className="swaddleee">SWADDLES FOR WADDLES</h1>
        </div>
      </div>
    );
  };
}

export default Login;
