'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await  queryInterface.addColumn('posts', 'user_id', { type: Sequelize.INTEGER });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
