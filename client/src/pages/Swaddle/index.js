import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import Carousel from "../../components/Carousel";

// import "./style.css";

function Swaddle() {
  // COMMENTED FOR DEMO ROUTING

  const Jimp = require("jimp");

  // Initiate the images:
  let imgPenguin =
    process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg"; // background image examples should all be the same size
  let sweaterRaw =
    process.env.PUBLIC_URL + "/assets/images/sweaters/redSweaterTest.png"; // png layer
  // THIS CAN GO IN AN API POST
  let imgExported =
    process.env.PUBLIC_URL + "/assets/images/exportedImages/swaddle.jpg"; //

  // MOVE THIS TO THE TEXT INPUT COMPONENT
  let textData = {
    // we will save our sweaters to have minimal transparant pad pad
    text: "BOOM", //the text to be rendered on the image - will be input
    maxWidth: 1004, // SET THIS AS penguin image width - 10px margin left - 10px margin right
    maxHeight: 100, // SET THIS AS penguin image width - 10px margin top - 10px margin bottom
    placementX: -150, // x axis
    placementY: 550 // y axis
  };

  // read template
  Jimp.read(imgPenguin)

    //combine sweater into image
    .then(
      mashUp =>
        Jimp.read(sweaterRaw)
          .then(sweaterTemplate => {
            sweaterTemplate.opacity(1);
            // numbers in next line are the position x, y for the sweater overlaw
            return mashUp.composite(sweaterTemplate, 100, 400, [
              Jimp.BLEND_DESTINATION_OVER,
              0.2,
              0.2
            ]);
          })

          //load font
          .then(textTemplate =>
            Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => [
              // Jimp.loadFont("./public/assets/fonts/FlappyBirdy-60.fnt").then(font => [
              // We will need to convert a font we link into a .fnt and save it to the repo
              textTemplate,
              font
            ])
          )

      // //  add text
      // .then(data => {
      //   textTemplate = data[0];
      //   font = data[1];

      //   return textTemplate.print(
      //     font,
      //     textData.placementX,
      //     textData.placementY,
      //     {
      //       text: textData.text,
      //       alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      //       alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
      //     },
      //     textData.maxWidth,
      //     textData.maxHeight
      //   );
      // })

      // //export image
      // .then(textTemplate => textTemplate.quality(100).write(imgExported))

      // //log exported filename
      // .then(textTemplate => {
      //   console.log("exported file: " + imgExported);
      // })

      // //catch errors
      // .catch(err => {
      //   console.error(err);
      // })
    );
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

// // wrap above in this?
// function swaddlePenguin(props) {
//   return <div />;
// }

// export default swaddlePenguin;
