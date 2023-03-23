'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      price :{
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      people: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      roomTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'room_types',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      buildingId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'buildings',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};