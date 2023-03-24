'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, DataTypes) => Promise.resolve()
  .then(() => queryInterface.addConstraint('booking_guests', {
    type: 'foreign_key',
    fields: ['bookingId'],
    name: 'booking_guest_booking',
    references: {
      table: 'bookings',
      field: 'id'
    }
  }))
  .then(() => queryInterface.addConstraint('booking_guests', {
    type: 'foreign_key',
    fields: ['guestId'],
    name: 'booking_guest_guest',
    references: {
      table: 'guest',
      field: 'id'
    }
  })),

  down: (queryInterface, Sequelize) => Promise.resolve()
  .then(() => queryInterface.removeConstraint('booking_guests', {
    type: 'foreign_key',
    fields: ['bookingId'],
    name: 'booking_guest_booking',
    references: {
      table: 'bookings',
      field: 'id'
    }
  }))
  .then(() => queryInterface.removeConstraint('booking_guests', {
    type: 'foreign_key',
    fields: ['guestId'],
    name: 'booking_guest_guest',
    references: {
      table: 'guest',
      field: 'id'
    }
  }))
};


