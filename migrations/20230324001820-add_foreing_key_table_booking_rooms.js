'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, DataTypes) => Promise.resolve()
  .then(() => queryInterface.addConstraint('booking_rooms', {
    type: 'foreign_key',
    fields: ['bookingId'],
    name: 'booking_rooms_booking',
    references: {
      table: 'bookings',
      field: 'id'
    }
  }))
  .then(() => queryInterface.addConstraint('booking_rooms', {
    type: 'foreign_key',
    fields: ['roomId'],
    name: 'booking_rooms_room',
    references: {
      table: 'rooms',
      field: 'id'
    }
  })),

  down: (queryInterface, Sequelize) => Promise.resolve()
  .then(() => queryInterface.removeConstraint('booking_rooms', {
    type: 'foreign_key',
    fields: ['bookingId'],
    name: 'booking_rooms_booking',
    references: {
      table: 'bookings',
      field: 'id'
    }
  }))
  .then(() => queryInterface.removeConstraint('booking_rooms', {
    type: 'foreign_key',
    fields: ['roomId'],
    name: 'booking_rooms_room',
    references: {
      table: 'rooms',
      field: 'id'
    }
  }))
};



