//setup for passport authentication
//module for json web token
const jwtSecret = require("./jwtConfig");
const bcrypt = require("bcryptjs");

const BCRYPT_SALT_ROUNDS = 12;

const passport = require("passport");

//local strategy uses a username and password to verify user
localStrategy = require("passport-local").Strategy;
User = require("../models/User");
//json web token requires a payload to verify user
JWTstrategy = require("passport-jwt").Strategy;
ExtractJWT = require("passport-jwt").ExtractJwt;

//local strategies are used for registering and logging in user
passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    (username, password, done) => {
      try {
        User.findOne({
          where: {
            username: username
          }
        }).then(user => {
          //check if requested username already exists in db
          if (user != null) {
            console.log("username already taken");
            return done(null, false, { message: "username already taken" });
          } else {
            //if user doesn't exists, create new user entry and hash password
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              User.create({ username, password: hashedPassword }).then(user => {
                console.log("user created");
                return done(null, user);
              });
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    (username, password, done) => {
      console.log(username);
      console.log(password);
      try {
        User.findOne({
          where: {
            username: username
          }
        }).then(user => {
          if (user === null) {
            return done(null, false, { message: "bad username" });
          } else {
            bcrypt.compare(password, user.password).then(response => {
              if (response !== true) {
                console.log("passwords do not match");
                return done(null, false, { message: "passwords do not match" });
              }
              console.log("user found & authenticated");
              // note the return needed with passport local - remove this return for passport JWT
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret
};

//Json web token strategy is used to verify user via token
passport.use(
  "jwt",
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      User.findOne({
        where: { username: jwt_payload.id }
      }).then(user => {
        if (user) {
          console.log("user found in db in passport");
          done(null, user);
        } else {
          console.log("user not found in db");
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
