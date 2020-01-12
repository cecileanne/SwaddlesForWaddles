import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import GalleryImage from "../../components/GalleryImage";
import Navbar from "../../components/Navbar";
import "./style.css";

function Gallery() {
  return (
    <Container fluid>
      <Row>
        
        <Col size="md-9">
          <Row>
            <Col size="md-12">
              <h1>Gallery</h1>
              <GalleryImage />
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

export default Gallery;
