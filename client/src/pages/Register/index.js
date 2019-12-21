import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { SubmitBtn } from "../../components/ButtonSubmit";
import "./style.css";
function Register() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Register</h1>
          </Jumbotron>
          <form>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
