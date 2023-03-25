'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.BookingGuest.belongsTo(models.Booking, { foreignKey: 'id', as: 'bookingR'  });
      models.BookingGuest.belongsTo(models.Room, { foreignKey: 'id', as: 'room'  });
    }
  }
  BookingRoom.init({
    bookingId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookingRoom',
    tableName: "booking_rooms",
    timestamps: false,
  });
  return BookingRoom;
};