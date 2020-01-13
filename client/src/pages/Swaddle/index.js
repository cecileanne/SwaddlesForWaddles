import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import {
  ResetBtn,
  DownloadBtn,
  AddTextBtn
} from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import API from "../../utils/API";
// import { stat } from "fs";
import "./swaddle.css";

class Swaddle extends Component {
  state = {
    imageTypes,
    clickedPenguinURL: "/assets/images/penguins/penguin001.jpg",
    clickedSweaterURL: "",
    userTextGrabbed: ""

    // userSelectedObject: { penguin: "", sweater: "", UserTextInput: "" }
  };

  // Selecting penguin and sweater
  handleClick = event => {
    const clickedImageURL = event.target.getAttribute("src");
    const clickedImageType = event.target.getAttribute("datatype");
    console.log(clickedImageURL, clickedImageType);

    // if penguin
    if (clickedImageType == "penguin") {
      const clickedPenguinURL = clickedImageURL;
      console.log("clickedPenguinURL is " + clickedPenguinURL);
      this.setState(
        {
          clickedPenguinURL: clickedPenguinURL
        },
        // TO DO: render a border around the selected penguin in Carousel
        () => {
          // console.log("callback executed");
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            // console.log("penguin selected");
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => console.log("we are sending this", data));
          }
        }
      );
    }
    // if sweater
    if (clickedImageType == "sweater") {
      const clickedSweaterURL = clickedImageURL;
      console.log("clickedSweaterURL is " + clickedSweaterURL);
      this.setState(
        {
          clickedSweaterURL: clickedSweaterURL
        },
        // TO DO: render a border around the selected sweater in Carousel
        () => {
          console.log("callback executed");
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            console.log("sweater selected");
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => console.log("we are sending this", data));
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
    console.log("user text is ", userTextGrabbed);
    // const userText = "";
    // do we set a default? - placeholder is in UserTextInput component
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
    console.log(
      "checking userText passing",
      this.state.userTextGrabbed,
      " penguin is ",
      this.state.clickedPenguinURL,
      " sweater is ",
      this.state.clickedSweaterURL
    );
    if (
      this.state.clickedPenguinURL &&
      this.state.clickedSweaterURL &&
      this.state.userTextGrabbed
    ) {
      console.log("we got it all");
      // TO DO: render a border around the selected penguin in Carousel
      API.jimpImages({
        imgPenguin: this.state.clickedPenguinURL,
        imgSweater: this.state.clickedSweaterURL,
        userText: this.state.userTextGrabbed
      }).then(data => console.log("we are sending this", data));
    }
  };

  render() {
    return (
      <div className="swaddle">
        <Container>
          <div>
            {/* header stuff can be a jumbotron or whatever is on brand */}
            <Row>
              {/* Header Stuf <p>{this.user.firstName}</p> */}
              <Col size="md-3">
                <h2> Hi [Username],</h2>
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
                      // {if(jimpImages){

                      //   src={this.state.JimpImages}
                      // }else{

                      src={this.state.clickedPenguinURL}
                      // }}

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
                    <AddTextBtn onClick={this.handleReset}>Rest </AddTextBtn> 
                    {/* resets to default penguin/clear space */}
                  </form>
                  <div className="text-center">
                                                  
                  </div>
                  <DownloadBtn />
                </section>
                 {/* downloads image  */}
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
