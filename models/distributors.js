"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Distributor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Distributor.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User Must Have A First Name" },
          notEmpty: { msg: "First Name Cannot Be Empty" },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User Must Have A Last Name" },
          notEmpty: { msg: "Last Name Cannot Be Empty" },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Location Required" },
          notEmpty: { msg: "Location Cannot Be Empty" },
        },
      },
      company_name: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contact_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Distributor",
      tableName: "distributors",
    }
  );
  return Distributor;
};
