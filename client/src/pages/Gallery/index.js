import React from "react";
// import "./style.css";

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
            <Navbar history={this.props.history} />
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
// function swaddlePenguin(props) {
//   return <div />;
// }

// export default swaddlePenguin;
