const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

const TaskItem = sequelize.define("taskitem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  workOrderDispatchCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = TaskItem;
