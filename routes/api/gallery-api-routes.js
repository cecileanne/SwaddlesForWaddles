const db = require("../models");
const router = require("express").Router();

// Matches with "/api/gallery images"
router
  .route("/api/galleryImages")
  .get((req, res) => {
    let query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Gallery.findAll({
      where: query,
      include: [db.User]
    }).then(dbGallery => {
      res.json(dbGallery);
    });
  })
  .post((req, res) => {
    db.Gallery.create(req.body).then(function(dbGallery) {
      res.json(dbGallery);
    });
  });

// Matches with "/api/gallery images/:id"
router
  .route("/galleryImage/:id")

  .delete((req, res) => {
    db.Gallery.create(req.body).then(dbGallery => {
      res.json(dbGallery);
    });
  });

module.exports = router;
