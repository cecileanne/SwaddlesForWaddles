// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
let logger = require("morgan");
let dotenv = require("dotenv");
let mysql = require("mysql");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger("combined"));

// if (process.env.host_jaws) {
//   connection = mysql.createConnection(process.env.host_jaws);
//   console.log("connected on remote db");
// } else {
//   connection = mysql.createConnection({
//     host: process.env.host_local,
//     port: 3306,
//     user: "root",
//     password: process.env.password_local,
//     database: process.env.db_local
//   });
// }

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
