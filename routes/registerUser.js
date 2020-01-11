//script that contains routes to register user to db
const db = require("../models");
const passport = require("passport");
const jwtSecret = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");

//post requests to register new user
module.exports = app => {
  app.post("/registerUser", (req, res, next) => {
    console.log("we hit it, register.js");
    passport.authenticate("register", (err, user, info) => {
      console.log("THIS IS USER", user);
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        //console.log("info is not undefined");
        console.log(info.message);
        res.send(info.message);
      } else {
        //console.log(req.body);
        req.logIn(user, err => {
          console.log(user, "from register back end login");
          const data = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            username: req.body.username //,
            //username: user.username
          };
          console.log(data);
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
              console.log("user  created in db");
              const token = jwt.sign({ id: data.username }, jwtSecret.secret);
              res.json({
                username: data.username,
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
