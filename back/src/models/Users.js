"use strict";

const { Model, sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      //sert à définir des relations
      Users.hasMany(models.Weights, {
        foreignKey: 'user_id'
      })
    }
  }

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(155),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [1, 150]
        },
      },
      email: {
        type: DataTypes.STRING(155),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty:true,
          len: [1, 150]
        },
      },
      password: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sexe: {
        type: DataTypes.ENUM("masculin","feminin","autre"),
        allowNull:false,
      },
      height: {
        type: DataTypes.DECIMAL(4,2),
        allowNull:false
      },


    },
    {
      //config
      sequelize,
      modelName: "Users", //le nom du model en js
      tableName: "users", //le nom de la table en db
      underscored: true, //snake case -> camelcase
      timestamps: true, //gestion du  created_at et updated_at auto
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Users;
};

