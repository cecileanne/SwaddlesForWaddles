import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { DonateBtn, AboutBtn, SwaddleBtn } from "../../components/ButtonSubmit";
import Jumbotron from "../../components/Jumbotron";
import "./style.css";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Swaddles for Waddles</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            This is an actual about page with the oil spill, pengiun sweater
            story. We hope people like the cause and want to a) make a
            cute/funny and b) make a donation to an org that fights/cleans up
            oil spills (org not yet choosen).This is an actual about page with
            the oil spill, pengiun sweater story. We hope people like the cause
            people like the cause and want to a) make a cute/funny and b) make a
          </p>
        </Col>
      </Row>
      <Row>
        <AboutBtn /> <SwaddleBtn /> <DonateBtn />
      </Row>
    </Container>
  );
}

export default Home;
