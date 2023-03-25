'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingGuest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.BookingGuest.belongsTo(models.Booking, { foreignKey: 'id', as: 'bookingG' });
      models.BookingGuest.belongsTo(models.Guest, { foreignKey: 'id', as: 'guest' });
    }
  }
  BookingGuest.init({
    bookingId: {
      type: DataTypes.INTEGER,
      model: 'Booking',
      key: 'id'
    },
    guestId: {
      type: DataTypes.INTEGER,
      model: 'Guest',
      key: 'id'
    },
  }, {
    sequelize,
    modelName: 'BookingGuest',
    tableName: "booking_guests",
    timestamps: false,
  });
  return BookingGuest;
};