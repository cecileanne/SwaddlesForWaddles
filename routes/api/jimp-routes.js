// const jimpPositions = require("../data.json");
const Jimp = require("jimp");
const router = require("express").Router();
const path = require("path");
let userText = "";

// Matches with "/api/jimp-routes/:penguin"
router.route("/jimpimages").post((req, res) => {
  console.log(`the goal`, req.body);
  jimp(req.body, img => res.json({ base64: img }));
});

// Process Jimp

function jimp({ imgPenguin, imgSweater, userText }, cb) {
  // define variables for positioning
  let sweaterX = 0;
  let sweaterY = 0;
  let textX = 0;
  let textY = 0;

  if (!userText) {
    userText = "";
  }

  // TO DO: make this dryer by running through the array in data.json
  // set jimp positioning based on what penguin is chosen
  if (imgPenguin == "/assets/images/penguins/penguin001.jpg") {
    textX = 300;
    textY = 560;
  } else if (imgPenguin == "/assets/images/penguins/penguin002.jpg") {
    textX = 440;
    textY = 500;
  } else if (imgPenguin == "/assets/images/penguins/penguin006.jpg") {
    textX = 330;
    textY = 420;
  }

  // Initiate the images:
  let penguinRaw = path.join(__dirname, "../../client/public", imgPenguin); // background image examples should all be the same size
  let sweaterRaw = path.join(__dirname, "../../client/public", imgSweater); // png layer
  let imgExported = path.join(__dirname, "/swaddle.jpg"); // place to save the finished if we have to write in order to make base64 work

  // per jimp documentation, process how text will be displayed on top of the mashup
  let textData = {
    text: userText, //the text to be rendered on the image
    maxWidth: 300, // width of sweater
    maxHeight: 300, // height of sweater
    placementX: textX, // x axis
    placementY: textY // y axis
  };

  // read template (bottom later is penguinRaw)
  Jimp.read(penguinRaw)
    //combine sweater into image
    .then(mashUp =>
      Jimp.read(sweaterRaw)
        .then(sweaterTemplate => {
          // TO DO: make this dryer by running through the array in data.json
          // set jimp positioning based on what penguin is chosen
          if (imgPenguin == "/assets/images/penguins/penguin001.jpg") {
            sweaterX = 180;
            sweaterY = 385;
          } else if (imgPenguin == "/assets/images/penguins/penguin002.jpg") {
            sweaterX = 325;
            sweaterY = 325;
          } else if (imgPenguin == "/assets/images/penguins/penguin006.jpg") {
            sweaterX = 220;
            sweaterY = 235;
          }
          sweaterTemplate.opacity(1);
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
              alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM
            },
            textData.maxWidth,
            textData.maxHeight
          );
        })

        //export image - writing only temporary, encode as base64 as the goal
        // TO DO do this without also writing?
        .then(textTemplate => textTemplate.quality(100).write(imgExported))
        .then(imgExported => imgExported.getBase64Async(Jimp.MIME_JPEG))
        .then(base64Img => {
          cb(base64Img);
        })

        //catch errors
        .catch(err => {
          console.error(err);
        })
    );
}

module.exports = router;
