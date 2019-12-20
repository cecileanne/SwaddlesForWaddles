const router = require("express").Router();

router.post("/api", (req, res) => {
  console.log(`front end sent `, req.body);
});

module.exports = router;
