//const User = require("../models/User");
var Sequelize = require("sequelize");

let sequelize = require("../config/connection");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
  //create User model
  // let User = sequelize.define("user", {
  //   first_name: Sequelize.STRING,
  //   last_name: Sequelize.STRING,
  //   username: Sequelize.STRING,
  //   password: Sequelize.STRING
  // });

  //sync with db
  // User.sync();

  // module.exports = User;
};
