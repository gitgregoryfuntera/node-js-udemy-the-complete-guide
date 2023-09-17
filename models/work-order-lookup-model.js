
const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

const WorkOrderLookups = sequelize.define("workorderlookups", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = WorkOrderLookups