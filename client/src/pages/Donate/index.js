import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { DonateBtn } from "../../components/ButtonSubmit";
import { List, ListItem } from "../../components/List";
import Navbar from "../../components/Navbar";

import "./style.css";

function Donate() {
  return (
    <Container fluid>
      <Row>
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
                  // value={this.state.title}
                  // onChange={this.handleInputChange}
                  name="Donation"
                  placeholder="$ 0.00"
                />

                <DonateBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
                >
                  Donate
                </DonateBtn>
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
          </Row>
        </Col>
        <Col size="md-3">
          <Navbar />
        </Col>
      </Row>
    </Container>
  );
}

export default Donate;
