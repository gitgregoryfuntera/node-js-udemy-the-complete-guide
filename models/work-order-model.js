const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

const WorkOrder = sequelize.define("workorder", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  workOrderName: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = WorkOrder