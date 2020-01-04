import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { SubmitBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import "./style.css";
function Login() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3">
          <Navbar />
        </Col>
        <Col size="md-9">
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
