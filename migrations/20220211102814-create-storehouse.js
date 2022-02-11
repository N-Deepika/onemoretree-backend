"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("storehouse", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      distributor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "distributors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tree_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "trees",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("storehouse");
  },
};
