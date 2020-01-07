const router = require("express").Router();
// FROM EXAMPLE wk20 activity11
// const booksController = require("../../controllers/booksController");

// Matches with "/api/jimp-routes/:penguin"
router
  .route("/penguin")
  // FROM EXAMPLE - DELETE THIS COMMENT
  // .get(booksController.findAll)
  // .post(booksController.create);
  .get((req, res) => {
    const selectedPenguin = req.params.penguin;
    const imgPenguin = process.env.PUBLIC_URL + selectedPenguin;
    res.send(imgPenguin);
    // res.json(imgPenguin);
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ roundtrip: "true" });
  });

// Matches with "/api/jimp-routes/:sweater"
router.route("/sweater").get((req, res) => {
  const selectedSweater = req.params.sweater;
  const imgSweater = process.env.PUBLIC_URL + selectedSweater;
  res.send(imgSweater);
  // res.json(imgSweater);
});

// Matches with "/api/jimp-routes/:userText"
router.route("/userText").get((req, res) => {
  const userText = req.params.userText;
  res.send(userText);
  // res.json(userText);
});

// // EXAMPLE
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

// const jimpPositions = require("./data.json");

// const router = require("express").Router();
// REQUIRE or GET that userSelectedObject which will {imgPenguin, imgSweater, userTextInput}
// import {
//   clickedPenguinURL,
//   clickedSweaterURL
// } from "../client/src/pages/Swaddle";

// router.get("/api/clickedImage/:sweater", (req, res) => {
//   const selectedSweater = req.params.sweater;
//   const imgSweater = process.env.PUBLIC_URL + selectedSweater;
//   res.json(imgSweater);
// });

// router.post("/api", (req, res) => {
//   console.log(`front end sent `, req.body);

//   // Process Jimp
//   const Jimp = require("jimp");

//   // Initiate the images:
//   let imgPenguin = process.env.PUBLIC_URL + clickedPenguinURL; // background image examples should all be the same size
//   let sweaterRaw = process.env.PUBLIC_URL + clickedSweaterURL; // png layer
//   // TO DO - THIS CAN BE MADE INTO AN API POST, and should save with a primary key id
//   // TO DO after Saturday MVP, maybe set up caching? Don't need if we save as base64?
//   let imgExported = process.env.PUBLIC_URL + "/exportedImages/swaddle.jpg"; //

//   // TO DO - MOVE THIS TO THE TEXT INPUT COMPONENT (already noted)
//   let textData = {
//     // we will save our sweaters to have minimal transparant pad pad
//     text: "SOMETHING FUNNY", //the text to be rendered on the image - will be input
//     maxWidth: 300, // SET THIS AS penguin image width - 10px margin left - 10px margin right
//     maxHeight: 300, // SET THIS AS penguin image width - 10px margin top - 10px margin bottom
//     placementX: -150, // x axis
//     placementY: 550 // y axis
//   };

//   // read template
//   Jimp.read(imgPenguin)

//     //combine sweater into image
//     .then(mashUp =>
//       Jimp.read(sweaterRaw)
//         .then(sweaterTemplate => {
//           sweaterTemplate.opacity(1);
//           // numbers in next line are the position x, y for the sweater overlaw
//           return mashUp.composite(sweaterTemplate, 100, 400, [
//             Jimp.BLEND_DESTINATION_OVER,
//             0.2,
//             0.2
//           ]);
//         })

//         //load font
//         .then(textTemplate =>
//           Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => [
//             // Jimp.loadFont("./public/assets/fonts/FlappyBirdy-60.fnt").then(font => [
//             // We will need to convert a font we link into a .fnt and save it to the repo
//             textTemplate,
//             font
//           ])
//         )

//         //  add text
//         .then(data => {
//           textTemplate = data[0];
//           font = data[1];

//           return textTemplate.print(
//             font,
//             textData.placementX,
//             textData.placementY,
//             {
//               text: textData.text,
//               alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
//               alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
//             },
//             textData.maxWidth,
//             textData.maxHeight
//           );
//         })

//         //export image
//         .then(textTemplate => textTemplate.quality(100).write(imgExported))

//         //log exported filename
//         .then(textTemplate => {
//           console.log("exported file: " + imgExported);
//         })

//         //catch errors
//         .catch(err => {
//           console.error(err);
//         })
//     );

//   // TO DO res. send processed image
// });

// module.exports = router;
