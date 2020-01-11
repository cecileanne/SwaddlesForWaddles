import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
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
        .get("/findUser", {
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
    this.setState({ [name]: value }, () => this.state);
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:5555/loginUser", this.state).then(res => {
      console.log(res);
      localStorage.setItem("JWT", res.data.token);
      localStorage.setItem("email", res.data.username);
    });
    this.props.history.push("/Swaddle");
  };
  render = () => {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Login</h1>
              <p>
                Don't have an account? Register <a href="/register">here</a>
              </p>
            </Jumbotron>
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
                onClick={this.handleFormSubmit}
                // disabled={!(this.state.author && this.state.title)}
              >
                Login
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Login;
