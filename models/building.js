'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Building.hasMany(models.Room, {});
      models.Building.hasMany(models.File, {
        foreignKey: 'entityId',
        constraints: false,
        scope: {
          entityName: 'Building'
        }
      });
    }
  }
  Building.init({
    code: DataTypes.STRING,
    address: DataTypes.STRING,
    rooms: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Building',
    tableName: 'buildings',
    timestamps: false
  });
  return Building;
};