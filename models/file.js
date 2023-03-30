'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.File.belongsTo(models.Building, { 
        foreignKey: 'entityId', 
        constraints: false 
      });
      models.File.belongsTo(models.Room, { 
        foreignKey: 'entityId', 
        constraints: false 
      });
    }
  }
  File.init({
    url: DataTypes.STRING,
    entityId: DataTypes.INTEGER,
    entityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'File',
    tableName: "files",
    timestamps: false,
  });
  return File;
};