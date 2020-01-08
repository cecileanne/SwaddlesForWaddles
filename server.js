//Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
let logger = require("morgan");
let dotenv = require("dotenv");
let mysql = require("mysql");
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
app.use(logger("dev"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/loginUser")(app);
require("./routes/registerUser")(app);
require("./routes/findUser")(app);
app.use(logger("combined"));
// if (process.env.host_jaws) {
//   connection = mysql.createConnection(process.env.host_jaws);
//   console.log("connected on remote db");
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "W0w4ng13!",
//     database: "user_data"
//   });
// }
// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
connection = require("./config/connection");
require("./routes/donation-api-routes.js")(app);
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   app.listen(PORT, function() {
//     console.log(
//       "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
//   console.log("connected as id " + connection.threadId);
// });
//Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
