'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DniType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.BusinessType.hasMany(models.Guest, {});
    }
  }
  DniType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DniType',
    tableName: "dni_types",
    timestamps: false,
  });
  return DniType;
};