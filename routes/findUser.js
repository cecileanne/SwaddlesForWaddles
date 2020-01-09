const passport = require("passport");

//get request to find user based on token
module.exports = app => {
  app.get("/findUser", (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      //console.log(user);
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log("user found in db from route");
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
};
