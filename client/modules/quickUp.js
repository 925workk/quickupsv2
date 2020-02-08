module.exports = function(sequelize, DataTypes) {
    var Quickup = sequelize.define("postQuickup", {
      storeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pickUpAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pickUpCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pickUpZip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pickUpFloor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dropOffAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dropOffCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dropOffState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dropOffZip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dropOffFloor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payOut: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });

  
    return Quickup;
  };
  