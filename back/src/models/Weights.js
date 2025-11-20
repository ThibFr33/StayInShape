"use strict";

const { Model, sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Weights extends Model {
    static associate(models) {
      //sert à définir des relations
      Weights.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })
    }
  }

  Weights.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
     weight: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
     },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      //config
      sequelize,
      modelName: "Weights", //le nom du model en js
      tableName: "weights", //le nom de la table en db
      underscored: true, //snake case -> camelcase
      timestamps: true, //gestion du  created_at et updated_at auto
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Weights;
};

