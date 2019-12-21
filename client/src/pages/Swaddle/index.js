import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { ShowPenguin, ShowSweater } from "../../components/ButtonIcon";
import { ResetBtn, SaveBtn } from "../../components/ButtonSubmit";
import Carousel from "../../components/Carousel";
import "./style.css";

function Swaddle() {
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
              <Col size="md-2">
                <ShowPenguin />
              </Col>
              <Col size="md-2">
                <ShowSweater />
              </Col>
              <Row>
                <Col size="md-12">
                  <UserTextInput />
                </Col>
              </Row>
            </Row>
          </Col>
          <Col size="md-6">
            <section>
              <div className="card">
                <img
                  className="card-img-top"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/penguins/penguinTest1.jpg"
                  }
                  alt="Card image cap"
                />
              </div>
            </section>
          </Col>
        </Row>

        <Row>
          <Col size="md-4 offset-md-2">
            <SaveBtn />
          </Col>
          <Col size="md-4 ">
            <ResetBtn />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Swaddle;
