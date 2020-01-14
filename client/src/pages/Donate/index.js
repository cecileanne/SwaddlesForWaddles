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
    userName: "",
    donation: [],
    amount: ""
  };

  componentDidMount() {
    const userName = localStorage.getItem("email");
    if (!userName) {
      //redirect to login
      this.props.history.push("/login");
    } else {
      this.setState({ userName });
      this.loadDonations();
    }
  }

  loadDonations = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      API.getDonations(userId)
        .then(res =>
          this.setState({
            donation: res.data,
            amount: ""
          })
        )
        .catch(err => console.log(err));
    } else {
      this.props.history.push("/login");
    }
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
      <div className="donate">
        <Container>
          <Row>
            <Col size="md-3">
              <h2> Hi {this.state.userName},</h2>
            </Col>
            <Col size="md-9">
              <h1>Swaddle A Penguin</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h4>
                The World Wildlife Fund is our favorite organization for saving
                animals. If you would like to help the penguins please pledge to
                donate.
              </h4>
              <p>
                Please note - no financial information will be requested at this
                time.
              </p>
              <form>
                <Input
                  value={this.state.title}
                  changeHandler={this.handleInputChange}
                  name="Donation"
                  placeholder="$ 0.00"
                />
                <div className="text-center">
                  <button
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Donate
                  </button>
                </div>
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
      </div>
    );
  }
}

export default Donate;
