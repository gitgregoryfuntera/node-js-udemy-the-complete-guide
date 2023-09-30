const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

const Task = sequelize.define("task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = Task;