'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Guest.belongsTo(models.DniType, {});
      models.Guest.belongsToMany(models.Booking, { 
        through: 'BookingGuest', 
        foreignKey: 'guestId',
        as: 'bookings' 
      });
    }
  }
  Guest.init({
    fullNames: DataTypes.STRING,
    dni: DataTypes.STRING,
    dniTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'DniType', 
        key: 'id'
      }
    },
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    gender: DataTypes.STRING,
    isMain: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Guest',
    tableName: "guests",
    timestamps: false,
  });
  return Guest;
};