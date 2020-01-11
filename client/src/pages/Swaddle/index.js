import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { ResetBtn, SaveBtn, AddTextBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import API from "../../utils/API";
import { stat } from "fs";
import "./style.css";

class Swaddle extends Component {
  state = {
    imageTypes,
    clickedPenguinURL: "",
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
  // handleText = event => {
  //   const inputValue = event.target.value;
  //   event.preventDefault();

  // Grabbing Text - able to grab keystrokes
  handleText = event => {
    const userTextGrabbed = event.target.value;
    console.log("user text is ", userTextGrabbed);
    // do we set a default? - placeholder is in UserTextInput component
    this.setState({ userTextGrabbed: userTextGrabbed });
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
    API.jimpImages({
      imgPenguin: this.state.clickedPenguinURL,
      imgSweater: this.state.clickedSweaterURL,
      userText: this.state.userTextGrabbed
    }).then(data => console.log("we are getting back", data));
  };

  // // TO DO POST clickedSweaterURL and clickedPenguinURL
  // sendImagesToJimp = (clickedPenguinURL, clickedSweaterURL) => {
  //   API.jimpImages({
  //     clickedPenguinURL,
  //     clickedSweaterURL
  //   })
  //     .then()
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <>
        <Container fluid>
          {/* header stuff can be a jumbotron or whatever is on brand */}
          <Row>Header Stuf</Row>
          <Row>
            <Col size="md-2">
               <p>Penguins</p>            
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
                    className="card-img-top "
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/penguins/penguinTest1.jpg"
                    }
                    alt="Card image cap"
                  />
                </div>
                <form>
                  <UserTextInput
                    userTextGrabbed={this.state.userTextGrabbed}
                    handleChange={this.handleText}
                  />
                  <AddTextBtn onClick={this.handleTextAddClick}>Add</AddTextBtn>
                </form>
              </section>
            </Col>
            <Col size="md-2">
               <p>Sweaters</p>         
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
          <div className="row">
                          
            <div className="text-center">
                              
              <SaveBtn /> {/* sends image to Gallery  */}
                           
              <ResetBtn /> {/* resets to default penguin/clear space */}
            </div>
                                       
          </div>
        </Container>
      </>
    );
  }
}
export default Swaddle;
