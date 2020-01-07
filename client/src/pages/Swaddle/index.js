import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { ResetBtn, SaveBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import API from "../../utils/API";
import { stat } from "fs";
import "./style.css";

class Swaddle extends Component {
  state = {
    imageTypes
  };

  handleClick = event => {
    const imgURL = event.target.getAttribute("src");
    console.log(imgURL);
    const imgTYPE = event.target.getAttribute("alt");
    console.log(imgTYPE);
  };

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-2">
              <Navbar />
            </Col>
            <Col size="md-1">
              <p>Penguins</p>
              {this.state.imageTypes.penguins.map((image, index) => (
                <ImageDisplay
                  key={index}
                  imgURL={image.imgURL}
                  dateName={image.dataName}
                  dataType={image.type}
                  clicked={image.clicked}
                  handleClick={this.handleClick}
                />
              ))}
            </Col>

            <Col size="md-6">
              <Row>
                <Col size="md-12">
                  <p>Swaddles for Waddles</p>
                </Col>
              </Row>
              <Row>
                <Col size="md-8">
                  <Row>
                    <Col size="md-12">
                      <section>
                        <div className="card ">
                          <img
                            className="card-img-top "
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
                    <Col size="md-12">
                      <UserTextInput />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col size="md-1">
              <p>Sweaters</p>
              {this.state.imageTypes.sweaters.map((image, index) => (
                <ImageDisplay
                  key={index}
                  imgURL={image.imgURL}
                  dateName={image.dataName}
                  dataType={image.type}
                  clicked={image.clicked}
                  handleClick={this.handleClick}
                />
              ))}
            </Col>
            <Row>
              <Col size="md-4 ">
                <SaveBtn />
              </Col>
              <Col size="md-4 ">
                <ResetBtn />
              </Col>
            </Row>
          </Row>
        </Container>
      </>
    );
  }
}
export default Swaddle;
