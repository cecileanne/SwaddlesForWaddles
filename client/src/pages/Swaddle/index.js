import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import Carousel from "../../components/Carousel";
import API from "../../utils/API";
import { stat } from "fs";

// import "./style.css";

function Swaddle() {
  const [state, setState] = useState({
    imgPenguin:
      // this will be our default penguin image
      process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg",
    sweaterOverlay:
      // for production, initial state is just an empty string
      process.env.PUBLIC_URL + "/assets/images/sweaters/redSweaterTest.png",
    textOverlay: "Your Text Goes Here"
    // NEED TO ADD - xPosition, yPosition, width, rotation (if we figure that out)
  });
  useEffect(() => {
    API.swaddle({
      penguin: state.imgPenguin,
      sweater: state.sweaterOverlay,
      textOverlay: UserTextInput
    }).then(data => {
      // TO DO set state with the data or pass down the processed image as a prop
    });
  }, []); // on change

  return (
    <>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <p>Swaddles for Waddles</p>
            <Carousel />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Row>
              <Col size="md-2">button</Col>
              <Col size="md-2">button</Col>
              <Row>
                <Col size="md-12">
                  <UserTextInput />
                </Col>
              </Row>
            </Row>
          </Col>
          <Col size="md-6">
            {/* Not sure if figure is best image area */}
            <figure className="figure">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/sweaters/blueSweaterTest.png"
                }
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption className="figure-caption">
                meme area (delete this figcaption)
              </figcaption>
            </figure>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 offset-md-2">
            {/* this will be a button component */}
            <button>Save</button>
          </Col>
          <Col size="md-4 ">
            {/* this will be a button component */}
            <button>Reset</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Swaddle;
