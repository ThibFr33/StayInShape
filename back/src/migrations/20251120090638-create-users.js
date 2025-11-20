'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(155),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(155),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      sexe: {
        type: Sequelize.ENUM("masculin","feminin","autre"),
        allowNull:false,
        defaultValue: ("autre")
      },
      height: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
        
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
