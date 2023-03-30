'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('guest', {
      type: 'foreign key',
      fields: ['DniTypeId'],
      name: 'dni_types_guest',
      references: {
        table: 'dni_types',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('guest', {
      type: 'foreign key',
      fields: ['DniTypeId'],
      name: 'dni_types_guest',
      references: {
        table: 'dni_types',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  }
};

