const db = require("../models");
const router = require("express").Router();

router
  .route("/api/donations")
  .get((req, res) => {
    let query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Donation.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbDonation) {
      res.json(dbDonation);
    });
  })
  .post((req, res) => {
    db.Donation.create(req.body).then(function(dbDonation) {
      res.json(dbDonation);
    });
  });

module.exports = router;
