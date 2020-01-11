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
        <Col size="md-9">
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Swaddles for Waddles</h1>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            <Col size="md-4">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/penguins/penguinTest1.jpg"
                }
              />
            </Col>

            <Col size="md-8">
              <article>
                <p>
                  A group of penguins is called a waddle, and a sweater for a
                  penguin is like a swaddle. Here, on Swaddles for Waddles, you
                  can create your own images and memes of penguins in sweaters!
                </p>
                <p>Create fun memes and be as fun and silly as you want.</p>
                <p>
                  In 2000, there was an oil spill near Melbourne, Australia that
                  effected local Little Blue Penguins. The Tasmanian
                  Conservation Trust and State Library requested
                  sweaters/jumpers for penguins to keep them from cleaning
                  themselves and thus ingesting the oil on their bodies. The
                  call to action was answered in larger numbers than the
                  orginizations could handle.
                </p>
                <p>
                  In 2014 there was another call for sweaters to have in stock
                  incase of another oil spill. Once again, the public sent too
                  many sweaters and many fun stories such as Australia's oldest
                  man knitting sweaters for the penguins.
                </p>
                <p>
                  We are offering you different way to engage with the cause.
                </p>
                <p>
                  A group of penguins is called a waddle, and a sweater for a
                  penguin is like a swaddle. Here, on Swaddles for Waddles, you
                  can create your own images and memes of penguins in sweaters!
                </p>
                <p>
                  Create fun memes and that will (indirectly) bring global
                  attention to the needs of penguins around the world. While we
                  love activism, don't feel pressure to make a social statement
                  with your meme! Be as fun and silly as you want.
                </p>
                <p>
                  If you would like to be more proactive in your support for
                  penguins please donate! We love the World Wild Life Foundation
                  and their efforts!
                </p>
              </article>

              <DonateBtn />
            </Col>
          </Row>
          <Row></Row>
        </Col>
        <Col size="md-3">
          <Navbar />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
