// Creating our Donation model
module.exports = function(sequelize, DataTypes) {
  var Donation = sequelize.define("Donation", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    // time: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
  });

  Donation.associate = function(models) {
    Donation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Donation;
};
