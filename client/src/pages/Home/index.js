import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3">
          <Navbar />
        </Col>
        <Col size="md-9">
          <Row>
            <Col size="md-12">
              <img src="../public/assets/images/icons/swaddles_for_waddles_logo.png" />
              <Jumbotron>
                <h1>Swaddles for Waddles</h1>
              </Jumbotron>
            </Col>
          </Row>
          {/* <Row>
            <Col size="md-12">
              <article>
                <p>
                  A group of penguins is called a waddle, and a sweater for a
                  penguin is like a swaddle. Here, on Swaddles for Waddles, you
                  can create your own images and memes of penguins in sweaters!
                </p>
                <p>Create fun memes and be as fun and silly as you want.</p>
              </article>
            </Col>
          </Row> */}
          <Row>
            <Link to="/About">
              <a className="btn btn-primary" role="button">
                About
              </a>
            </Link>
            <Link to="/Swaddle">
              <a className="btn btn-primary" role="button">
                Swaddle a Pengiun!
              </a>
            </Link>
            <Link to="/Donate">
              <a className="btn btn-primary" role="button">
                Donate
              </a>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
