'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Booking.belongsToMany(models.Guest, { 
        through: 'BookingGuest', 
        foreignKey: 'bookingId',
        as: 'guests' 
      });
      
      models.Booking.belongsToMany(models.Room, { 
        through: 'BookingRoom', 
        foreignKey: 'bookingId',
        as: 'rooms' 
      });
    }
  }
  Booking.init({
    total: DataTypes.INTEGER,
    nights: DataTypes.FLOAT,
    code: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    emergencyContactName: DataTypes.STRING,
    emergencyContactNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: "bookings",
    timestamps: false,
  });
  return Booking;
};