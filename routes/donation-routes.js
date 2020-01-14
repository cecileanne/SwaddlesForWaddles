const db = require("../models");
const router = require("express").Router();

router.get("/donations/:user_id", (req, res) => {
  // let query = {};
  // if (req.params.user_id) {
  //   query.UserId = req.params.user_id;
  // }
  let userId = req.params.user_id;
  console.log(userId);
  db.Donation.findAll({
    where: { id: userId },
    hierarchy: true
  }).then(function(dbDonation) {
    console.log(dbDonation);
    dbDonation.forEach(donation => {
      // console.log(donation);
    });
    //res.json(dbDonation);
    //console.log("THEN DONATION", dbDonation);
  });
});

router.route("/donations").post((req, res) => {
  //console.log("OBJECT HERE", req.body);
  db.Donation.create(req.body).then(function(dbDonation) {
    res.json(dbDonation);
  });
});

module.exports = router;
