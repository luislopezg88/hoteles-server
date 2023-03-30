'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Room.belongsTo(models.RoomType);
      models.Room.belongsTo(models.Building);
      models.Room.belongsToMany(models.Booking, { 
        through: 'BookingRoom', 
        foreignKey: 'RoomId',
        as: 'bookings' 
      });
      models.Room.hasMany(models.File, {
        foreignKey: 'EntityId',
        constraints: false,
        scope: {
          entityName: 'Room'
        }
      });
    }
  }
  Room.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    address: DataTypes.STRING,
    people: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    RoomTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'RoomType',
        key: 'id'
      }
    },
    BuildingId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Building',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
    timestamps: false
  });
  return Room;
};