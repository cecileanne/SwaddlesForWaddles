import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormSubmit } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";

import "./style.css";

class Donate extends Component() {
  state = {
    donations: [],
    amount: ""
  };
  componentDidMount() {
    this.loadDonations();
  }

  loadDonations = () => {
    API.getDonations()
      .then(res => this.setState({ donations: res.data, amount: "" }))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { amount, value } = event.target;
    this.setState({
      [amount]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.postDonation({
      amount: this.state.amount
    })
      .then(res => this.loadDonations())
      .catch(err => console.log(err));
  };
  render = () => {
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
                  <h1>Help Save the Pengiuns</h1>
                </Jumbotron>
              </Col>
              <Col size="md-6">
                <h4>
                  The Wild Life Foundation is our favorite orgination for saving
                  animals. If you would like to help the penguins please donate
                  now.
                </h4>
                <form>
                  <Input
                    name="Donation"
                    placeholder="$ 0.00"
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                  />

                  <FormSubmit
                    disabled={!this.state.amount}
                    onClick={this.handleFormSubmit}
                  >
                    Donate
                  </FormSubmit>
                </form>
              </Col>
              <Col size="md-6">
                <h1>Donations</h1>
                <List>
                  {this.state.donations.map(donation => (
                    <ListItem key={donation._id} value={donation.amount} />
                  ))}
                </List>
                <div>
                  <h2>Total: $50.00</h2>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Donate;
