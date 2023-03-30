'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint('users', {
        fields: ['RoleId'],
        type: 'foreign key',
        name: 'rool_user',
        references: {
          table: 'roles',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeConstraint('users', 'rool_user')
    ]);
  }
};
