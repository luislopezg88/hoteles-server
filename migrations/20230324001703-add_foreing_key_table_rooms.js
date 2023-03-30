'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, DataTypes) => Promise.resolve()
  .then(() => queryInterface.addConstraint('rooms', {
    fields: ['RoomTypeId'],
    type: 'foreign key',
    name: 'room_types_room',
    references: {
      table: 'room_types',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }))
  .then(() => queryInterface.addConstraint('rooms', {
    fields: ['BuildingId'],
    type: 'foreign key',
    name: 'building_room',
    references: {
      table: 'buildings',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  })),

  down: (queryInterface, Sequelize) => Promise.resolve()
  .then(() => queryInterface.removeConstraint('rooms', {
    fields: ['RoomTypeId'],
    type: 'foreign key',
    name: 'room_types_room',
    references: {
      table: 'room_types',
      field: 'id'
    }
  }))
  .then(() => queryInterface.removeConstraint('rooms', {
    fields: ['BuildingId'],
    type: 'foreign key',
    name: 'building_room',
    references: {
      table: 'buildings',
      field: 'id'
    }
  }))
};

