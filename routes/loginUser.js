const User = require("../models/User");
const passport = require("passport");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");

//get request to login existing user
module.exports = app => {
  app.post("/loginUser", (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      console.log(user);
      console.log(info);
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          User.findOne({
            where: {
              username: user.username
            }
          }).then(user => {
            console.log("found user!");

            //generate new token for user
            const token = jwt.sign({ id: user.username }, jwtSecret.secret);
            res.json({
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
};
