import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import GalleryImage from "../../components/GalleryImage";
import Navbar from "../../components/Navbar";
import "./style.css";

class Gallery extends Component() {
  state = {
    image
  };
  componentDidMount() {
    this.loadGallery();
  }

  loadGallery = () => {
    API.getGalleryImages()
      .then(res => this.setState(image))
      .catch(err => console.log(err));
  };

  render = () => {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Navbar />
          </Col>
          <Col size="md-9">
            <Row>
              <Col size="md-12">
                <h1>Gallery</h1>
                <GalleryImage />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Gallery;
