// Creating our Gallery model
module.exports = function(sequelize, DataTypes) {
  var Gallery = sequelize.define("Gallery", {
    image: {
      type: DataTypes.BLOB, //not sure which dataType yet...
      allowNull: false
    }
  });
  Gallery.associate = function(models) {
    Gallery.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Gallery;
};
