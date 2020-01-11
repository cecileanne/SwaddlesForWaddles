"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "production";
console.log("env", env);
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  console.log(process.env.db_jaws);
  console.log(process.env.username_jaws);
  console.log(process.env.password_jaws);
  console.log(process.env.host_jaws);
  var sequelize = new Sequelize(
    process.env.db_jaws,
    process.env.username_jaws,
    process.env.password_jaws,
    {
      host: process.env.host_jaws,
      port: 3306,
      dialect: "mysql"
    }
  );
} else {
  console.log("connected to LOCAL");
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
