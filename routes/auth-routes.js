let express = require("express");
let router = express.Router();
const db = require("../models");
const passport = require("passport");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");

// middleware that is specific to this router

router.post("/registerUser", (req, res, next) => {
  passport.authenticate("register", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      res.send(info.message);
    } else {
      //console.log(req.body);
      req.logIn(user, err => {
        const data = {
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          username: req.body.username //,
          //username: user.username
        };
        db.User.findOne({
          where: {
            username: data.username
          }
        })
          .then(user => {
            user.update({
              first_name: data.first_name,
              last_name: data.last_name //,
              //email: data.email
            });
          })
          .then(() => {
            const token = jwt.sign({ id: data.username }, jwtSecret.secret);

            res.json({
              username: data.username,
              userId: user.dataValues.id,
              auth: true,
              token: token,
              message: "user created"
            });
            //res.status(200).send({ message: "user created" });
          });
      });
    }
  })(req, res, next);
});

router.post("/loginUser", (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      res.send(info.message);
    } else {
      req.logIn(user, err => {
        db.User.findOne({
          where: {
            username: user.username
          }
        }).then(user => {
          //generate new token for user
          const token = jwt.sign({ id: user.username }, jwtSecret.secret);
          res.json({
            userId: user.id,
            username: user.username,
            auth: true,
            token: token,
            message: "user found & logged in"
          });
        });
      });
    }
  })(req, res, next);
});

router.get("/findUser", (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      res.send(info.message);
    } else {
      res.status(200).send({
        auth: true,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        message: "user found in db"
      });
    }
  })(req, res, next);
});

module.exports = router;
