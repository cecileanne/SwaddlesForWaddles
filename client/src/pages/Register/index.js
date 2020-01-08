import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
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
  //console.log(this.state.cards);

  componentDidMount() {
    let accessString = localStorage.getItem("JWT");
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true
      });
    } else {
      axios
        .get("http://localhost:5555/findUser", {
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
        })
        .catch(err => console.log(err.data));
    }
  }

  handleInputChange = event => {
    //console.log(event);
    const { value, name } = event.target;
    //console.log(value, name);
    this.setState({ [name]: value }, () => console.log(this.state));
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:5555/registerUser", this.state).then(res => {
      console.log(res);
      localStorage.setItem("JWT", res.data.token);
      localStorage.setItem("email", res.data.username);
    });
    //return <Redirect to="/Swaddle" />;
    this.props.history.push("/Swaddle");
  };
  render = () => {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Register</h1>
            </Jumbotron>
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
          </Col>
        </Row>
      </Container>
    );
  };
}
export default Register;
