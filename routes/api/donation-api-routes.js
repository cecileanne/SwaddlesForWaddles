const db = require("../models");

module.exports = function(app) {
  app.get("/api/donations", function(req, res) {
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
  });

  app.post("/api/donations", function(req, res) {
    db.Donation.create(req.body).then(function(dbDonation) {
      res.json(dbDonation);
    });
  });
};

//
