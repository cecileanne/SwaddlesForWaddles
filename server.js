//Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
const logger = require("morgan");
require("dotenv").config();
const Cors = require("cors");
const passport = require("passport");
require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(Cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logger("dev"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
const routes = require("./routes/");
// middleware for jimp routes
app.use((req, res, next) => {
  console.log(req.url, req.body);
  next();
});
app.use(routes);

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(logger("combined"));

//Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
