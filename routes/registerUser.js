//script that contains routes to register user to db
const User = require("../models/User");
const passport = require("passport");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");

//post requests to register new user
module.exports = app => {
  app.post("/registerUser", (req, res, next) => {
    console.log("we hit it");
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(user);
        console.log("info is not undefined");
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          console.log(user);
          const data = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            username: req.body.username //,
            //username: user.username
          };
          User.findOne({
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
              console.log("user created in db");
              const token = jwt.sign({ id: data.username }, jwtSecret.secret);
              res.json({
                username: user.username,
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
};
