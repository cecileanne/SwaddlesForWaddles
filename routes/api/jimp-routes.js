// const jimpPositions = require("../data.json");
const Jimp = require("jimp");
const router = require("express").Router();
const path = require("path");

// Matches with "/api/jimp-routes/:penguin"
router
  .route("/jimpimages")

  .post((req, res) => {
    console.log(`the goal`, req.body);
    jimp(req.body, img => res.json({ base64: img }));
  });

// Process Jimp

function jimp({ imgPenguin, imgSweater, userText }, cb) {
  // console.log(typeof __dirname);
  // console.log(typeof imgPenguin);
  // console.log(imgPenguin, imgSweater);

  // define variables for positioning
  let sweaterX = 0;
  let sweaterY = 0;
  let textX = 0;
  let textY = 0;

  // Initiate the images:
  let penguinRaw = path.join(__dirname, "../../client/public", imgPenguin); // background image examples should all be the same size
  let sweaterRaw = path.join(__dirname, "../../client/public", imgSweater); // png layer
  let imgExported = path.join(__dirname, "/swaddle.jpg"); // place to save the finished if we have to write in order to make base64 work

  // set jimp positioning based on what penguin is chosen
  if ((penguinRaw = "/assets/images/penguins/penguin001.jpg")) {
    sweaterX = 180;
    sweaterY = 410;
    textX = 300;
    textY = 560;
  }
  if ((penguinRaw = "/assets/images/penguins/penguin002.jpg")) {
    sweaterX = 325;
    sweaterY = 355;
    textX = 440;
    textY = 500;
  }
  if ((penguinRaw = "/assets/images/penguins/penguin006.jpg")) {
    sweaterX = 220;
    sweaterY = 260;
    textX = 330;
    textY = 420;
  }

  // per jimp documentation, process how text will be displayed on top of the mashup
  let textData = {
    // we will save our sweaters to have minimal transparant pad pad
    text: userText, //the text to be rendered on the image - will be input
    maxWidth: 300, // SET THIS AS penguin image width - 10px margin left - 10px margin right
    maxHeight: 300, // SET THIS AS penguin image width - 10px margin top - 10px margin bottom
    placementX: textX, // x axis
    placementY: textY // y axis
  };

  // read template (bottom later is penguinRaw)
  Jimp.read(penguinRaw)

    //combine sweater into image
    .then(mashUp =>
      Jimp.read(sweaterRaw)
        .then(sweaterTemplate => {
          sweaterTemplate.opacity(1);
          console.log(
            "i picked this penguin",
            penguinRaw,
            "position x of the sweater is",
            sweaterX,
            "position y is",
            sweaterY
          );
          return mashUp.composite(sweaterTemplate, sweaterX, sweaterY, [
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

        //export image - writing only temporary, encode as base64 as the goal
        .then(textTemplate => textTemplate.quality(100).write(imgExported))
        .then(imgExported => imgExported.getBase64Async(Jimp.MIME_JPEG))

        //log exported filename
        .then(base64Img => {
          console.log("base64Img", base64Img);
          cb(base64Img);
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
