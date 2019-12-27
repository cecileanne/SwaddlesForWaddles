import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { DonateBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import "./style.css";

function About() {
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
                <h1>Swaddles for Waddles</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/penguins/penguinTest1.jpg"
                }
              />
            </Col>
            <Col size="md-9">
              <p>
                This is an actual about page with the oil spill, pengiun sweater
                story. We hope people like the cause and want to a) make a
                cute/funny and b) make a donation to an org that fights/cleans
                up oil spills (org not yet choosen).This is an actual about page
                with the oil spill, pengiun sweater story. We hope people like
                the cause and want to a) make a cute/funny and b) make a
                donation to an org that fights/cleans up oil spills (org not yet
                choosen). This is an actual about page with the oil spill,
                pengiun sweater story. We hope people like the cause and want to
                a) make a cute/funny and b) make a donation to an org that
                fights/cleans up oil spills (org not yet choosen).This is an
                actual about page with the oil spill, pengiun sweater story. We
                hope people like the cause and want to a) make a cute/funny and
                b) make a donation to an org that fights/cleans up oil spills
                (org not yet choosen). This is an actual about page with the oil
                spill, pengiun sweater story. We hope people like the cause and
                want to a) make a cute/funny and b) make a donation to an org
                that fights/cleans up oil spills (org not yet choosen).This is
                an actual about page with the oil spill, pengiun sweater story.
                We hope people like the cause and want to a) make a cute/funny
                and b) make a donation to an org that fights/cleans up oil
                spills (org not yet choosen). This is an actual about page with
                the oil spill, pengiun sweater story. We hope people like the
                cause and want to a) make a cute/funny and b) make a donation to
                an org that fights/cleans up oil spills (org not yet
                choosen).This is an actual about page with the oil spill,
                pengiun sweater story. We hope people like the cause and want to
                a) make a cute/funny and b) make a donation to an org that
                fights/cleans up oil spills (org not yet choosen). This is an
                actual about page with the oil spill, pengiun sweater story. We
                hope people like the cause and want to a) make a cute/funny and
                b) make a donation to an org that fights/cleans up oil spills
                (org not yet choosen).This is an actual about page with the oil
                spill, pengiun sweater story. We hope people like the cause and
                want to a) make a cute/funny and b) make a donation to an org
                that fights/cleans up oil spills (org not yet choosen). This is
                an actual about page with the oil spill, pengiun sweater story.
                We hope people like the cause and want to a) make a cute/funny
                and b) make a donation to an org that fights/cleans up oil
                spills (org not yet choosen).This is an actual about page with
                the oil spill, pengiun sweater story. We hope people like the
                cause and want to a) make a cute/funny and b) make a donation to
                an org that fights/cleans up oil spills (org not yet choosen).
                This is an actual about page with the oil spill, pengiun sweater
                story. We hope people like the cause and want to a) make a
                cute/funny and b) make a donation to an org that fights/cleans
                up oil spills (org not yet choosen).This is an actual about page
                with the oil spill, pengiun sweater story. We hope people like
                the cause and want to a) make a cute/funny and b) make a
                donation to an org that fights/cleans up oil spills (org not yet
                choosen). This is an actual about page with the oil spill,
                pengiun sweater story. We hope people like the cause and want to
                a) make a cute/funny and b) make a donation to an org that
                fights/cleans up oil spills (org not yet choosen).This is an
                actual about page with the oil spill, pengiun sweater story. We
                hope people like the cause and want to a) make a cute/funny and
                b) make a donation to an org that fights/cleans up oil spills
                (org not yet choosen).
              </p>
            </Col>
          </Row>
          <Row>
            <DonateBtn />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
