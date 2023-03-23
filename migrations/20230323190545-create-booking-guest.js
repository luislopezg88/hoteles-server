'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_guests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookingId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'bookings',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      guestId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'guests',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_guests');
  }
};