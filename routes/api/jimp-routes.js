const jimpPositions = require("../data.json");
const Jimp = require("jimp");
const router = require("express").Router();
const path = require("path");

// FROM EXAMPLE wk20 activity11
// const booksController = require("../../controllers/booksController");

// Matches with "/api/jimp-routes/:penguin"
router
  .route("/jimpimages")
  // .get((req, res) => {
  //   const selectedPenguin = req.params.penguin;
  //   const penguinRaw = process.env.PUBLIC_URL + selectedPenguin;
  //   res.send(penguinRaw);
  //   // res.json(penguinRaw);
  // })
  .post((req, res) => {
    console.log(`the goal`, req.body);
    jimp(req.body);
    res.json({ roundtrip: "true" });
  });

// // Matches with "/api/jimp-routes/:sweater"
// router.route("/sweater").get((req, res) => {
//   const selectedSweater = req.params.sweater;
//   const imgSweater = process.env.PUBLIC_URL + selectedSweater;
//   res.send(imgSweater);
//   // res.json(imgSweater);
// });

// // Matches with "/api/jimp-routes/:userText"
// router.route("/userText").get((req, res) => {
//   const userText = req.params.userText;
//   res.send(userText);
//   // res.json(userText);
// });

// Process Jimp

function jimp({ imgPenguin, imgSweater, userText }) {
  // Initiate the images:
  // let penguinRaw = process.env.PUBLIC_URL + imgPenguin; // background image examples should all be the same size
  // let sweaterRaw = process.env.PUBLIC_URL + imgSweater; // png layer
  let penguinRaw = path.join(__dirname, "../../client/public", imgPenguin); // background image examples should all be the same size
  let sweaterRaw = path.join(__dirname, "../../client/public", imgSweater); // png layer
  // TO DO - THIS CAN BE MADE INTO AN API POST, and should save with a primary key id
  // TO DO after Saturday MVP, maybe set up caching? Don't need if we save as base64?
  // let imgExported = process.env.PUBLIC_URL + "/exportedImages/swaddle.jpg"; //
  let imgExported = path.join(__dirname, "/swaddle.jpg"); //

  // TO DO - MOVE THIS TO THE TEXT INPUT COMPONENT (already noted)
  let textData = {
    // we will save our sweaters to have minimal transparant pad pad
    text: userText, //the text to be rendered on the image - will be input
    maxWidth: 300, // SET THIS AS penguin image width - 10px margin left - 10px margin right
    maxHeight: 300, // SET THIS AS penguin image width - 10px margin top - 10px margin bottom
    placementX: -150, // x axis
    placementY: 550 // y axis
  };

  // read template
  Jimp.read(penguinRaw)

    //combine sweater into image
    .then(mashUp =>
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

        //  add text
        .then(data => {
          textTemplate = data[0];
          font = data[1];

          return textTemplate.print(
            font,
            textData.placementX,
            textData.placementY,
            {
              text: textData.text,
              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
            },
            textData.maxWidth,
            textData.maxHeight
          );
        })

        //export image - don't write, encode as base64
        .then(textTemplate => textTemplate.quality(100).write(imgExported))

        //log exported filename
        .then(textTemplate => {
          console.log("exported file: " + imgExported);
        })

        //catch errors
        .catch(err => {
          console.error(err);
        })
    );
}
//   // TO DO res. send processed image
// });

module.exports = router;
