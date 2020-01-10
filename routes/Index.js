// OLD VERSION TO DELETE
// import "./donation-api-routes";
// import "./jimp-routes";
// module.exports = routes;

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/jimp-routes");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
