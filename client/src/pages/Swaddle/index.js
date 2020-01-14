import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { DownloadBtn, AddTextBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import API from "../../utils/API";
import "./swaddle.css";

class Swaddle extends Component {
  state = {
    imageTypes,
    clickedPenguinURL: "/assets/images/penguins/penguin001.jpg",
    clickedSweaterURL: "",
    userTextGrabbed: "",
    userName: ""
  };
  componentDidMount() {
    const userName = localStorage.getItem("email");
    if (!userName) {
      //redirect to login
      this.props.history.push("/login");
    } else {
      this.setState({ userName });
    }
  }
  // Selecting penguin and sweater
  handleClick = event => {
    const clickedImageURL = event.target.getAttribute("src");
    const clickedImageType = event.target.getAttribute("datatype");
    console.log(clickedImageURL, clickedImageType);

    // if penguin
    if (clickedImageType == "penguin") {
      const clickedPenguinURL = clickedImageURL;
      this.setState(
        {
          clickedPenguinURL: clickedPenguinURL
        },
        () => {
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => this.setState({ process: data.data.base64 }));
          }
        }
      );
    }
    // if sweater
    if (clickedImageType == "sweater") {
      const clickedSweaterURL = clickedImageURL;
      this.setState(
        {
          clickedSweaterURL: clickedSweaterURL
        },
        () => {
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => this.setState({ process: data.data.base64 }));
          }
        }
      );
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };

  // Grabbing Text - able to grab keystrokes
  handleText = event => {
    const userTextGrabbed = event.target.value;
    this.setState({ userTextGrabbed: userTextGrabbed });
  };
  handleReset = () => {
    {
      this.setState({
        clickedPenguinURL: "/assets/images/penguins/penguin001.jpg",
        clickedSweaterURL: "",
        userTextGrabbed: ""
      });
    }
  };

  handleTextAddClick = event => {
    event.preventDefault();
    if (
      this.state.clickedPenguinURL &&
      this.state.clickedSweaterURL &&
      this.state.userTextGrabbed
    ) {
      API.jimpImages({
        imgPenguin: this.state.clickedPenguinURL,
        imgSweater: this.state.clickedSweaterURL,
        userText: this.state.userTextGrabbed
      }).then(data => {
        this.setState({ process: data.data.base64 });
      });
    }
  };

  render() {
    return (
      <div className="swaddle">
        <Container>
          <div>
            <Row>
              <Col size="md-3">
                <h2> Hi {this.state.userName},</h2>
              </Col>
              <Col size="md-9">
                <h1>Swaddle A Penguin</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-2">
                {this.state.imageTypes.penguins.map((image, index) => (
                  <ImageDisplay
                    key={index}
                    imgURL={image.imgURL}
                    dateName={image.dataname}
                    datatype={image.type}
                    clicked={image.clicked}
                    handleClick={this.handleClick}
                  />
                ))}
              </Col>
              <Col size="md-7">
                <section className="text-center">
                  <div className="card ">
                    <img
                      id="preview"
                      className="card-img-top "
                      src={this.state.process || this.state.clickedPenguinURL}
                      alt="Meme Preview"
                    />
                  </div>
                  <form>
                    <UserTextInput
                      userTextGrabbed={this.state.userTextGrabbed}
                      handleChange={this.handleText}
                    />
                    <AddTextBtn onClick={this.handleTextAddClick}>
                      Add
                    </AddTextBtn>
                    <AddTextBtn onClick={this.handleReset}>Reset </AddTextBtn> 
                  </form>
                  <div className="text-center">                        </div>
                  <DownloadBtn process={this.state.process} />
                </section>
              </Col>
              <Col size="md-2">
                {this.state.imageTypes.sweaters.map((image, index) => (
                  <ImageDisplay
                    key={index}
                    imgURL={image.imgURL}
                    dateName={image.dataname}
                    datatype={image.type}
                    clicked={image.clicked}
                    handleClick={this.handleClick}
                  />
                ))}
              </Col>
              <Col size="md-1">
                           
                <Navbar />
                           
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Swaddle;
