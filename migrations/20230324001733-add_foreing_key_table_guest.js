'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('guest', {
      type: 'foreign_key',
      fields: ['dniTypeId'],
      name: 'dni_types_guest',
      references: {
        table: 'dni_types',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('guest', {
      type: 'foreign_key',
      fields: ['dniTypeId'],
      name: 'dni_types_guest',
      references: {
        table: 'dni_types',
        field: 'id'
      }
    })
  }
};

