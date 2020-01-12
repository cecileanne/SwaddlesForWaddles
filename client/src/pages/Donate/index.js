import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

import "./style.css";

class Donate extends Component {
  state = {
    donation: [],
    amount: ""
  };

  componentDidMount() {
    this.loadDonations();
  }

  loadDonations = () => {
    API.getDonations()
      .then(res =>
        this.setState({
          donation: res.data,
          amount: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState(
      {
        value: value
      },
      () => console.log(this.state)
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.postDonation({
      amount: this.state.amount
    })
      .then(res => this.loadDonations())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Help Save the Pengiuns</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <h4>
              The Wild Life Foundation is our favorite orgination for saving
              animals. If you would like to help the penguins please donate now.
            </h4>
            <form>
              <Input
                value={this.state.title}
                changeHandler={this.handleInputChange}
                name="Donation"
                placeholder="$ 0.00"
              />

              <button
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Donate
              </button>
            </form>
          </Col>
          <Col size="md-6">
            <h1>Donations</h1>
            <List>
              {/* {this.state.donations.map(donation => ( */}
              {/* <ListItem key={donation._id}> */}
              <ListItem>
                <strong>{/* {donation.date} by {donation.amount} */}</strong>
              </ListItem>
            </List>
            <div>
              <h2>Total: $50.00</h2>
            </div>
          </Col>
          <Navbar />
        </Row>
      </Container>
    );
  }
}

export default Donate;
