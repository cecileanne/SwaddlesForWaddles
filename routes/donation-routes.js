const db = require("../models");
const router = require("express").Router();

router.get("/donations/:user_id", (req, res) => {
  // let query = {};
  // if (req.params.user_id) {
  //   query.UserId = req.params.user_id;
  // }
  console.log(req.params, "REQ PARAMS");
  let userId = req.params.user_id;
  console.log(userId);
  db.Donation.findAll({
    where: { UserId: userId },
    hierarchy: true
  }).then(function(dbDonation) {
    console.log("DONATION TABLE GOES HERE", dbDonation);
    const relevantData = dbDonation.map(Donation => {
      console.log("TYPE", typeof Donation.dataValues.createdAt.toString());
      return {
        amount: Donation.dataValues.amount,
        transactionDate: Donation.dataValues.createdAt.toDateString() //.split("T")[0]
      };
    });
    // dbDonation.forEach(donation => {
    //   // console.log(donation);
    // });
    res.json(relevantData);
    //console.log("THEN DONATION", dbDonation);
  });
});

router.route("/donations").post((req, res) => {
  //console.log("OBJECT HERE", req.body);
  db.Donation.create(req.body).then(function(dbDonation) {
    //console.log(dbDonation)
    res.json(dbDonation);
  });
});

module.exports = router;
