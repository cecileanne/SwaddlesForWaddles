import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Navbar from "../../components/Navbar";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import "./donate.css";

class Donate extends Component {
  state = {
    userName: "",
    donations: [],
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
        .then(res => {
          this.setState({
            donation: res.data,
            amount: ""
          });
          console.log(res);
        })
        .catch(err => console.log(err));
    } else {
      this.props.history.push("/login");
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState(
      {
        amount: value
      },
      () => console.log(this.state)
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const userId = localStorage.getItem("userId");
    API.postDonation({
      amount: this.state.amount,
      UserId: userId
    })
      .then(res => this.loadDonations())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="donate">
        <div className="donationHeader">
          <Row>
            <Col size="md-3">
              <img
                className="headerBarLogo"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/icons/swaddles_for_waddles_logo.png"
                }
                alt="Swaddles for Waddles Logo"
              ></img>
              <h3 className="donationGreet">Hello {this.state.userName}!</h3>
            </Col>
            <Col size="md-8">
              <h1 className="donationTitle">Support the Penguins</h1>
            </Col>
            <Col size="md-1">
               <Navbar className="navBarBlue"></Navbar>
            </Col>
          </Row>
        </div>
        <div className="containerDonationReq">
          <Row>
            <Col size="md-8" classname="containerInfoForm">
              <h4>
                The World Wildlife Fund is our favorite organization for saving
                animals. If you would like to help the penguins please pledge to
                donate.
              </h4>
              <h4 className="italics">
                Please note - no financial information will be requested at this
                time.
              </h4>
              <hr></hr>
              <form>
                <Input
                  value={this.state.value}
                  changeHandler={this.handleInputChange}
                  name="Donation"
                  placeholder="$ 0.00"
                />
                <div className="text-center">
                  <button
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Pledge
                  </button>
                </div>
              </form>
            </Col>
            <Col size="md-4">
              <List />
              <div>
                <h2>Total Donations to date: $50.00 (MAKE THIS INTO STATE?)</h2>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Donate;
