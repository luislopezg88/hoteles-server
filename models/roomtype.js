'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.RoomType.hasMany(models.Room, {});
    }
  }
  RoomType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoomType',
    tableName: 'room_types',
    timestamps: false
  });
  return RoomType;
};