//initiate connection to mysql

let Sequelize = require("sequelize");

let sequelize = new Sequelize(
  process.env.db_jaws,
  process.env.username_jaws,
  process.env.password_jaw,
  {
    host: process.env.host_jaws,
    port: 3306,
    dialect: "mysql"
  }
);

// let sequelize = new Sequelize(
//   "user_data",
//   process.env.username_jaws,
//   process.env.password_jaws,
//   {
//     host: process.env.host_jaws,
//     port: process.env.port,
//     dialect: "mysql"
//   }
// );

module.exports = sequelize;
