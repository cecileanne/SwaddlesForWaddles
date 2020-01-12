const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/jimp-routes");
const authRoutes = require("./auth-routes");
const donateRoutes = require("./api/donation-routes");

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
router.use("/donate", donateRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
