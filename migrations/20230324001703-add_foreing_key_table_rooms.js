'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, DataTypes) => Promise.resolve()
  .then(() => queryInterface.addConstraint('rooms', {
    type: 'foreign_key',
    fields: ['roomTypeId'],
    name: 'room_types_room',
    references: {
      table: 'room_types',
      field: 'id'
    }
  }))
  .then(() => queryInterface.addConstraint('rooms', {
    type: 'foreign_key',
    fields: ['buildingId'],
    name: 'building_room',
    references: {
      table: 'buildings',
      field: 'id'
    }
  })),

  down: (queryInterface, Sequelize) => Promise.resolve()
  .then(() => queryInterface.removeConstraint('rooms', {
    type: 'foreign_key',
    fields: ['roomTypeId'],
    name: 'room_types_room',
    references: {
      table: 'room_types',
      field: 'id'
    }
  }))
  .then(() => queryInterface.removeConstraint('rooms', {
    type: 'foreign_key',
    fields: ['buildingId'],
    name: 'building_room',
    references: {
      table: 'buildings',
      field: 'id'
    }
  }))
};

