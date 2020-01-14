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
    <div>
      <Navbar />

      <h1>Help Save the Pengiuns</h1>
      <h4>
        The Wild Life Foundation is our favorite orgination for saving animals.
        If you would like to help the penguins please donate now.
      </h4>
      <form>
        <Input
          // value={this.state.title}
          // onChange={this.handleInputChange}
          name="Donation"
          placeholder="$ 0.00"
        />

        <DonateBtn>Donate</DonateBtn>
      </form>

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
    </div>
  );
}

export default Donate;
