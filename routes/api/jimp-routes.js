const jimpPositions = require("../data.json");
const Jimp = require("jimp");
const router = require("express").Router();
const path = require("path");

// Matches with "/api/jimp-routes/:penguin"
router
  .route("/jimpimages")
  // .post((req, res) => {
  //   console.log(`the goal`, req.body);
  //   jimp(req.body, img => res.json({ base64: img }));
  // .post((req, res) => {
  //   console.log(req.body);
  //   jimp(req.body);
  //   res.json({ base64Img: img });
  // });
  .post((req, res) => {
    console.log("the goal", req.body);
    jimp(req.body);
    res.json({ roundtrip: "true" });
  });

// Process Jimp
function jimp({ imgPenguin, imgSweater, userText }) {
  // function jimp({ imgPenguin, imgSweater, userText }, cb) {
  // console.log(typeof __dirname);
  // console.log(typeof imgPenguin);
  // console.log(imgPenguin, imgSweater);

  // // TO DO RUN AGAINST ARRAY
  // getPositions(jimpPositions) => {
  //   if (imgPenguin = jimpPositions.imgURL) {

  //   }
  // }

  // Initiate the images:
  let penguinRaw = path.join(__dirname, "../../client/public", imgPenguin); // background image examples should all be the same size
  let sweaterRaw = path.join(__dirname, "../../client/public", imgSweater); // png layer
  let imgExported = path.join(__dirname, "/swaddle.jpg"); //

  // Initiate text
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
        // .then(imgExported => imgExported.getBase64Async(Jimp.MIME_JPEG))

        // //log exported filename
        // .then(base64Img => {
        //   // console.log("base64Img", base64Img);
        //   cb(base64Img);
        // })

        //catch errors
        .catch(err => {
          console.error(err);
        })
    );
}
//   // TO DO res. send processed image
// });

module.exports = router;
