'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('guests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullNames: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      dniTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'dni_types',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      email: {
        type: Sequelize.STRING
      },
      contactNumber: {
        type: Sequelize.STRING
      },
      birthdate:{
        allowNull: true,
        type: Sequelize.STRING
      },
      gender:{
        allowNull: true,
        type: Sequelize.STRING
      },
      isMain: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('guests');
  }
};